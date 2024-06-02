import { defineConfig } from 'vitepress'
import {generateSidebar} from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "YunBlog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: generateSidebar([
      {
        documentRootPath: 'docs/posts/',
        scanStartPath: 'python',
        resolvePath: '/posts/python/',
        rootGroupText: 'Python'
      },
      {
        documentRootPath: 'docs/posts/',
        scanStartPath: 'docker',
        resolvePath: '/posts/docker/',
        rootGroupText: 'Docker'
      }
    ]),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
