import adapter from "@sveltejs/adapter-auto"
import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    mdsvex({
      extensions: [".svelte", ".md"]
    }),
    preprocess()
  ],
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte"
  }
}

export default config
