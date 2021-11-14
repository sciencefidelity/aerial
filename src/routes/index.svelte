<script context="module">
  import { browser, dev } from "$app/env"
  import Index from "../index.md"

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true
</script>

<svelte:head>
  <title>Brecon Sound Forage</title>
  <meta name="description" content="An artscape residency at the Island Fields in Brecon, Mid Wales" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <div class="home">
    <picture>
      <source srcset="site.webp" type="image/webp" />
      <img src="site.jpg" alt="Island Fields map" width="660" height="396" />
    </picture>
    <div style="height: 3rem" />
    <Index />
  </div>
</main>
