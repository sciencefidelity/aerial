import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  kit: {
    adapter: adapter(),
  },
  preprocess: [
    mdsvex({
      extensions: [".svelte", ".md"]
    }),
    preprocess()
  ]
}
export default config
