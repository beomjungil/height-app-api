// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Height App API',
  tagline: 'Unofficial TypeScript Wrapper Height App API',
  favicon: 'img/favicon.ico',
  url: 'https://height-api.xyz',
  baseUrl: '/',

  organizationName: 'beomjungil',
  projectName: 'height-app-api',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          breadcrumbs: false,
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/beomjungil/height-app-api/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      })
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-redoc',
      {
        spec: './openapi.yaml',
        route: '/openapi/',
      },
    ]
  ],

  themes: [
    [
      "docusaurus-theme-redoc",
      {
        primaryColor: 'rgba(121, 87, 255, 1)',
        primaryColorDark: 'rgb(155, 120, 255)',
      }
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/socialimage.png',
      navbar: {
        title: 'Height App API',
        logo: {
          alt: 'Height App API',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs'
          },
          {
            type: 'doc',
            docId: 'api/height-app-api',
            position: 'left',
            label: 'API'
          },
          {
            to: 'openapi/',
            position: 'left',
            label: 'OpenAPI spec'
          },
          {
            href: 'https://github.com/beomjungil/height-app-api',
            label: 'GitHub',
            position: 'right'
          },
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Official Height Docs',
                href: 'https://www.notion.so/API-documentation-643aea5bf01742de9232e5971cb4afda'
              },
              {
                label: 'Getting Started',
                to: '/docs/category/getting-started'
              },
              {
                label: 'API References',
                to: '/docs/api/height-app-api'
              },
              {
                label: 'API References',
                to: '/docs/api/height-app-api'
              },
              {
                label: 'Open API Specification',
                to: '/openapi'
              },
            ]
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/beomjungil/height-app-api'
              },
              {
                label: 'Discussions',
                href: 'https://github.com/beomjungil/height-app-api/discussions'
              },
              {
                label: 'Issues',
                href: 'https://github.com/beomjungil/height-app-api/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc'
              },
            ]
          },
          {
            title: 'Try Height App',
            items: [
              {
                label: 'Height App',
                href: 'https://height.app/'
              },
              {
                label: 'All features',
                href: 'https://height.app/product/features'
              },
              {
                label: 'Height Team Blog',
                href: 'https://height.app/blog'
              },
            ]
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
    })
};

module.exports = config;
