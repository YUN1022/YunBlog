import {createContentLoader} from 'vitepress'


export interface Post{
    title: string
    summary: string
    date: string
    url: string
    excerpt: string | undefined
}


const formatDate = (rawDate: string): string => {
    const date = new Date(rawDate)
    return date.toLocaleDateString()
}

export const data : Post[] = []
export default createContentLoader('posts/*.md', {
    excerpt: true,
    transform(raw): Post[] {
        return raw.map((page) => ({
            title: page.frontmatter.title,
            summary: page.frontmatter.summary,
            date: formatDate(page.frontmatter.date),
            url: page.url,
            excerpt: page.excerpt
        }))
    }
})
