import {FrontMatter} from "./types";

const formatDate = (rawDate: string): string => {
    const date = new Date(rawDate)
    return date.toLocaleDateString()
}

const formatFrontMatter = (rawData) :FrontMatter => {
    return {
        title: rawData.title,
        summary: rawData.summary,
        date: formatDate(rawData.date)
    }

}

export const formatPost = (page) => ({
    ...formatFrontMatter(page.frontmatter),
    url: page.url
})