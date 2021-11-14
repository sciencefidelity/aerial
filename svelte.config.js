import preprocess from "svelte-preprocess"
import { mdsvex } from "mdsvex"
import vercel from "@sveltejs/adapter-vercel"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ".md"],
  preprocess: [
    mdsvex({
      extensions: [".svelte", ".md"]
    }),
    preprocess()
  ],

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: vercel(),
    target: "#svelte"
  }
}

export default config
