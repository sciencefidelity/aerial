<script context="module">
  import { browser, dev } from "$app/env"

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

<section>
  <main>
    <div class="home">
      <picture>
        <source srcset="site.webp" type="image/webp" />
        <img src="site.jpg" alt="Island Fields map" width="660" height="396" />
      </picture>
      <div style="height: 3rem" />
      <p>
        Climate Change in Brecknockshire results in irregular storms and
        significant increases in rainfall. A series of field recordings gathered
        throughout Autumn 2021, this work celebrates, archives and critiques the
        biodiversity of Brecon’s Island Fields, a flood plain situated between
        the River Usk and the Monmouthshire and Brecon Canal on the edge of the
        town. The whole ecosystem here is at risk due to increased flooding at
        times of the year when the nature here is vulnerable. The Island Fields
        is a space well loved by the local community for walking, playing,
        swimming and the enjoyment of the natural World.
      </p>
      <p>
        Artscape artist-in-residence Matt Cook has developed this work through a
        series of interactions with ornithologist Andrew King; the Biodiversity
        Information Service for Powys and local green wood workers.
      </p>
    </div>
  </main>
</section>
