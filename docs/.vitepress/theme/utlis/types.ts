export interface FrontMatter{
    title: string
    summary: string
    date: string
    tags: string[]
}

export interface Post extends FrontMatter{
    url: string
}