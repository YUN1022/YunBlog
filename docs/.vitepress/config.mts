import { defineConfig } from 'vitepress'
import {generateSidebar} from "vitepress-sidebar";

const sidebarConfig = (theme: string) => {
  return {
    documentRootPath: 'docs/posts/',
    scanStartPath: theme,
    resolvePath: `/posts/${theme}/`,
    rootGroupText: theme.toUpperCase(),
    sortMenusByFrontmatterDate: true,
    sortMenusOrderByDescending: true
  }
}

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
      sidebarConfig('python'),
      sidebarConfig('docker')
    ]),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
