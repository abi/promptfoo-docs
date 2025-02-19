// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'promptfoo',
  tagline: 'The prompt engineering toolkit',
  favicon: '/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.promptfoo.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'typpo', // Usually your GitHub org/user name.
  projectName: 'promptfoo', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/typpo/promptfoo-docs/tree/main',
          sidebarCollapsed: false,
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        */
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-3TS8QLZQ93',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'promptfoo',
        logo: {
          alt: 'promptfoo logo',
          src: 'img/logo.svg',
        },
        items: [
          /*
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          */
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/typpo/promptfoo',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro',
              },
              {
                label: 'Command line',
                to: '/docs/getting-started',
              },
              {
                label: 'Node package',
                to: '/docs/usage/node-package',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/typpo/promptfoo',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} promptfoo`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'VPUDC1V4TA',

        // Public API key: it is safe to commit it
        apiKey: '0b4fcfd05976eb0aaf4b7c51ec4fcd23',

        indexName: 'promptfoo',
      },
    }),
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],
};

module.exports = config;
