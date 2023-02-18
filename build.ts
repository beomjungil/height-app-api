import { execSync } from 'child_process';
import path from 'path';
import { copyFileSync, createReadStream, mkdirSync, readdirSync, writeFileSync } from 'fs';

import esbuild from 'esbuild';
import rimraf from 'rimraf';
import {
  Extractor,
  ExtractorConfig,
  type ExtractorResult,
} from '@microsoft/api-extractor';
import { createInterface } from 'readline';

const buildCJS = async () => await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/cjs/index.cjs',
  minify: true,
  sourcemap: true,
  target: [
    'es2020',
    // TODO: Add browser support
  ],
  format: 'cjs',
});

const buildESMForBrowser = async () => await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/es/height-app-api.mjs',
  minify: true,
  sourcemap: true,
  target: [
    'es2020',
    // TODO: Add browser support
  ],
  format: 'esm',
  platform: 'browser',
});

const buildESMForNode = async () => esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/es/index.js',
  minify: true,
  sourcemap: true,
  target: [
    'es2020',
    'node12',
  ],
  format: 'esm',
  platform: 'node',
});

const buildDocs = async () => new Promise<void>((resolve, reject) => {
  execSync('tsc src/*.ts --emitDeclarationOnly --outDir types --declaration');
  mkdirSync(path.resolve('./dist/docs'));
  mkdirSync(path.resolve('./docs/docs/api'));
  const extractorConfig: ExtractorConfig = ExtractorConfig.loadFileAndPrepare(
    path.resolve('./api-extractor.json'),
  );

  const extractorResult: ExtractorResult = Extractor.invoke(extractorConfig, {
    localBuild: true,
    showVerboseMessages: true,
  });

  if (extractorResult.succeeded) {
    execSync('api-documenter markdown -i ./dist/docs/temp -o ./dist/docs');

    const docFiles = readdirSync(path.resolve('./dist/docs'));
    for (const docFile of docFiles) {
      try {
        const { name: id, ext } = path.parse(docFile);
        if (ext !== '.md') {
          continue;
        }

        const docPath = path.join('./dist/docs', docFile);
        const input = createReadStream(docPath);
        const output: string[] = [];
        const lines = createInterface({
          input,
          crlfDelay: Infinity,
        });

        let title = '';
        lines.on('line', line => {
          let skip = false;
          if (title === '') {
            const titleLine = line.match(/## (.*)/);
            if (titleLine !== null) {
              title = titleLine[1];
            }
          }
          const homeLink = line.match(/\[Home\]\(.\/index\.md\) &gt; (.*)/);
          if (homeLink !== null) {
            if (id !== 'height-app-api') {
              output.push(homeLink[1]);
            }
            skip = true;
          }
          if (line.startsWith('|')) {
            line = line.replace(/\\\|/g, '&#124;');
          }
          if (!skip) {
            output.push(line);
          }
        });

        lines.once('close', () => {
          input.close();

          const header = [
            '---',
            `id: ${id}`,
            `title: ${title}`,
            'hide_title: true',
            'displayed_sidebar: null',
            '---',
          ];

          writeFileSync(path.join('./docs/docs/api', docFile), header.concat(output).join('\n'));
        });
      } catch (err) {
        console.error(`Could not process ${docFile}:`, err);
      }
    }

    rimraf.sync('types');
    console.log('API Extractor completed successfully');
    resolve();
  } else {
    const error = new Error(`API Extractor completed with ${extractorResult.errorCount} errors` +
      ` and ${extractorResult.warningCount} warnings`);
    console.error(error);
    reject(error);
  }
});

void (async () => {
  await rimraf('dist');
  await rimraf('docs/docs/api');
  await Promise.all([
    buildCJS(),
    buildESMForBrowser(),
    buildESMForNode(),
  ]);

  copyFileSync('openapi.yaml', 'docs/openapi.yaml');

  await buildDocs();
})();
