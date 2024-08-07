/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'NMRium documentation',
  tagline:
    'Learn how to use NMRium, the react component to view and process NMR spectra',
  url: 'https://docs.nmrium.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cheminfo',
  projectName: 'nmrium-docs',
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        docsRouteBasePath: '/',
        indexPages: true, //because of bug: https://github.com/easyops-cn/docusaurus-search-local/issues/42
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'NMRium Logo',
        src: 'img/nmrium-logo.svg',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/cheminfo/nmrium-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} NMRium contributors. Built with Docusaurus.`,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/cheminfo/nmrium-docs/edit/main/',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
