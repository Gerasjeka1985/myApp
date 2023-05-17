import type { NuxtConfig } from '@nuxt/types'
// import {resolve} from "path";

const config: NuxtConfig = {
    // alias: {
    //     "@": resolve(__dirname, "/"),
    // },
    head: {
      title: 'My App'
    },
    css:['@/assets/scss/main.scss'],
    app : {
        pageTransition: {name: 'page', mode: 'out-in'}
    },
}

export default config

