export interface FrontMatter{
    title: string
    summary: string
    date: string
    timestamp: number
    tags: string[]
}

export interface Post extends FrontMatter{
    url: string
}