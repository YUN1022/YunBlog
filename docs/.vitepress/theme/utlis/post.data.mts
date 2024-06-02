import {createContentLoader} from 'vitepress'
import {formatPost} from './utlis'
import type {Post} from "./types";

export const data: Post[] = []
export default createContentLoader('posts/*.md', {
    excerpt: true,
    transform(raw): Post[] {
        return raw.map(formatPost)
    }
})
