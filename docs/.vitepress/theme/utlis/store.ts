import {defineComponent, reactive} from 'vue'
import slugify from "@sindresorhus/slugify";

interface State {
    key: string
}

const state = reactive<State>({
    key: ''
})

export const updateKey = (key: string) => {
    state.key = slugify(key)
}

export default state