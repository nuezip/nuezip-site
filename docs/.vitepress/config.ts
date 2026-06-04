import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: '/gomoku/',
  title: 'Gomoku',
  titleTemplate: 'Gomoku — :title',
  description: 'Gomoku — official project documentation.',
  lastUpdated: true,
  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    
    // Theme and viewport
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    
    // SEO
    ['meta', { name: 'keywords', content: 'gomoku, game, board game, documentation, go-moku' }],
    ['meta', { name: 'author', content: 'Gomoku Project' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Gomoku' }],
    ['meta', { property: 'og:url', content: 'https://gomoku.w3cub.com/' }],
    ['meta', { property: 'og:title', content: 'Gomoku — Official project documentation' }],
    ['meta', { property: 'og:description', content: 'Documentation and guides for the Gomoku project.' }],
    ['meta', { property: 'og:image', content: 'https://gomoku.w3cub.com/preview.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'Gomoku Preview' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://gomoku.w3cub.com/' }],
    ['meta', { name: 'twitter:title', content: 'Gomoku — Official project documentation' }],
    ['meta', { name: 'twitter:description', content: 'Documentation and guides for the Gomoku project.' }],
    ['meta', { name: 'twitter:image', content: 'https://gomoku.w3cub.com/preview.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'Gomoku Preview' }],
  ],
  themeConfig: {
    siteTitle: 'Gomoku',
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'FAQ', link: '/guide/faq' },
      { text: 'Changelog', link: 'https://github.com/gomoku-app/gomoku-site/blob/main/CHANGELOG.md' },
      { text: 'Repository', link: 'https://github.com/gomoku-app/gomoku-site' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
              { text: 'Introduction', link: '/guide/introduction' },
              { text: 'Installation', link: '/guide/installation' },
              { text: 'Usage', link: '/guide/usage' },
              { text: 'Set Default SGF Viewer', link: '/guide/set-default-sgf-viewer' },
              { text: 'LAN Play', link: '/guide/lan-play' },
              { text: 'Permissions', link: '/guide/screen-recording' },
              { text: 'Troubleshooting', link: '/guide/troubleshooting' },
              { text: 'FAQ', link: '/guide/faq' }
        ]
      },
      {
        text: 'Legal',
        items: [
          { text: 'Privacy Policy', link: '/guide/privacy' },
          { text: 'Privacy Choices', link: '/guide/privacy-choices' },
          { text: 'Terms of Service', link: '/guide/terms' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/gomoku-app' }
    ],
    footer: {
      message: 'Built with ❤️',
      copyright: 'Copyright © 2026 Gomoku Project. All rights reserved.',
      items: [
        {
          text: 'Product',
          items: [
            { text: 'About', link: '/guide/introduction' },
            { text: 'Features', link: '/#features' },
            { text: 'Installation', link: '/guide/installation' }
          ]
        },
        {
          text: 'Support',
          items: [
            { text: 'Documentation', link: '/guide/introduction' },
            { text: 'FAQ', link: '/guide/faq' },
            { text: 'Troubleshooting', link: '/guide/troubleshooting' },
            { text: 'Contact', link: 'mailto:gomoku@w3cub.com' }
          ]
        },
        {
          text: 'Company',
          items: [
            { text: 'About', link: '/guide/introduction' },
            { text: 'Privacy Policy', link: '/guide/privacy' },
            { text: 'Terms of Service', link: '/guide/terms' },
            { text: 'GitHub', link: 'https://github.com/gomoku-app' }
          ]
        }
      ]
    }
  }
})