import { defineConfig } from 'vitepress'

export default defineConfig({
  // base: '/',
  title: 'PetReminder',
  titleTemplate: 'PetReminder — :title',
  description: 'PetReminder — macOS reminder app with cute desktop pets.',
  lastUpdated: true,
  head: [
    // Favicons
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.png' }],
    
    // Theme and viewport
    ['meta', { name: 'theme-color', content: '#f97316' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    
    // SEO
    ['meta', { name: 'keywords', content: 'pet-reminder, reminder, desktop-pet, macos, productivity, pet-app' }],
    ['meta', { name: 'author', content: 'PetReminder Project' }],
    
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'PetReminder' }],
    ['meta', { property: 'og:url', content: 'https://reminder.w3cub.com/' }],
    ['meta', { property: 'og:title', content: 'PetReminder — Cute desktop pets for your reminders' }],
    ['meta', { property: 'og:description', content: 'When reminders are due, cute desktop pets appear to keep you company. Never forget important things again!' }],
    ['meta', { property: 'og:image', content: 'https://reminder.w3cub.com/preview.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:image:alt', content: 'PetReminder Preview' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://reminder.w3cub.com/' }],
    ['meta', { name: 'twitter:title', content: 'PetReminder — Cute desktop pets for your reminders' }],
    ['meta', { name: 'twitter:description', content: 'When reminders are due, cute desktop pets appear to keep you company. Never forget important things again!' }],
    ['meta', { name: 'twitter:image', content: 'https://reminder.w3cub.com/preview.png' }],
    ['meta', { name: 'twitter:image:alt', content: 'PetReminder Preview' }],
  ],
  themeConfig: {
    siteTitle: 'PetReminder',
    logo: '/logo.png',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Pets', link: '/guide/pets' },
      { text: 'FAQ', link: '/guide/faq' },
      { text: 'Repository', link: 'https://github.com/reminder-app/reminder' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
              { text: 'Introduction', link: '/guide/introduction' },
              { text: 'Installation', link: '/guide/installation' },
              { text: 'Usage', link: '/guide/usage' },
              { text: 'Pets & IAP', link: '/guide/pets' },
              { text: 'Permissions', link: '/guide/permissions' },
              { text: 'Customize', link: '/guide/customize' },
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
      { icon: 'github', link: 'https://github.com/reminder-app/reminder' }
    ],
    footer: {
      message: 'Built with ❤️ for pet lovers',
      copyright: 'Copyright © 2026 PetReminder Project. All rights reserved.',
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
            { text: 'Contact', link: 'mailto:reminder@w3cub.com' }
          ]
        },
        {
          text: 'Company',
          items: [
            { text: 'About', link: '/guide/introduction' },
            { text: 'Privacy Policy', link: '/guide/privacy' },
            { text: 'Terms of Service', link: '/guide/terms' },
            { text: 'GitHub', link: 'https://github.com/reminder-app/reminder' }
          ]
        }
      ]
    }
  }
})