import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"
import vercel from "@sveltejs/adapter-vercel"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    mdsvex(),
    preprocess({
      postcss: true,
      defaults: {
        style: "scss",
        script: "typescript"
      }
    })
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: vercel(),
    target: "#svelte"
  }
}

export default config
