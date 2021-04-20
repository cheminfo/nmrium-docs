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
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'NMRium Logo',
        src: 'img/nmrium-logo.svg',
      },
      items: [
        {
          to: 'docs/',
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
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'NMRium',
          items: [
            {
              label: 'Website',
              href: 'https://www.nmrium.org',
            },
            {
              label: 'YouTube',
              href:
                'https://www.youtube.com/playlist?list=PL8levPKi7DDofiW5UVbIzhKkbHnpa5prX',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/cheminfo/nmrium-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NMRium contributors. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          //   sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: 'https://github.com/cheminfo/nmrium-docs/edit/master/',
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
