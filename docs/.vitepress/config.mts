import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/my_oral_english_book/',
  title: "My Oral English Book",
  description: "A journey of speaking what I want to say.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Entries', link: '/entries' }
    ],

    sidebar: [
      {
        text: 'Oral English',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Entries', link: '/entries' }
        ]
      }
    ],

    socialLinks: [
    ]
  }
})

