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
        blog: {
          showReadingTime: true,
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
          alt: 'My Site Logo',
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
          { to: '/blog', label: 'Blog', position: 'left' },
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
                label: 'Tutorial',
                to: '/docs/intro'
              },
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus'
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus'
              },
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/beomjungil/height-app-api'
              },
            ]
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
    })
};

module.exports = config;
