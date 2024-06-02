export interface FrontMatter{
    title: string
    summary: string
    date: string
}

export interface Post extends FrontMatter{
    url: string
}