import * as OpenAPI from 'openapi-typescript-codegen';
import rimraf from 'rimraf';
import fs from 'fs';

async function overrideGenerated (): Promise<void> {
  const sourceDir = './src/generated-overrides';
  const destinationDir = './src/generated/models';

  return new Promise((resolve, reject) => {
    fs.readdir(sourceDir, (err, files) => {
      if (err !== null) {
        reject(err);
        return;
      }

      const copyPromises = files.map(async file => {
        const source = `${sourceDir}/${file}`;
        const destination = `${destinationDir}/${file}`;

        return new Promise<void>((resolve, reject) => {
          fs.copyFile(source, destination, err => {
            if (err !== null) {
              reject(err);
              return;
            }

            resolve();
          });
        });
      });

      Promise.all(copyPromises)
        .then(() => {
          console.log('All files copied successfully');
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  });
}

void (async () => {
  await rimraf('src/generated');
  await OpenAPI.generate({
    input: './openapi.json',
    output: './src/generated',
    useUnionTypes: true,
    indent: '2',
    exportCore: false,
    exportServices: false,
  });
  await overrideGenerated();
})();
