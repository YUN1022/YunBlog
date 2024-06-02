import {FrontMatter, Post} from "./types";

const formatDate = (rawDate: string): {date: string, timestamp: number} => {
    const date = new Date(rawDate)
    return {
        date: date.toLocaleDateString(),
        timestamp: date.getTime()
    }
}

const formatFrontMatter = (rawData): FrontMatter => {
    return {
        ...formatDate(rawData.date),
        title: rawData.title,
        summary: rawData.summary,
        tags: rawData.tags
    }

}

export const formatPost = (page): Post => ({
    ...formatFrontMatter(page.frontmatter),
    url: page.url
})