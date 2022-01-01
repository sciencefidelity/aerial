<script context="module">
  import { browser, dev } from "$app/env"
  import Index from "../md/index.md"
  export const hydrate = dev
  export const router = browser
  export const prerender = true
</script>

<svelte:head>
  <title>Brecon Sound Forage</title>
  <meta
    name="description"
    content="An artscape residency at the Island Fields in Brecon, Mid Wales"
  />
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
    <div style="height: 3rem;" />
    <Index />
  </div>
</main>

<style lang="scss">
  img {
    width: 100%;
    height: auto;
  }

  .home {
    max-width: 70rem;
    padding: 2rem 2rem 5rem;
    margin: auto;
  }
</style>
