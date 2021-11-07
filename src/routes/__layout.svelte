<script lang="ts">
  import "../app.css"
</script>

<header>
  <h1>Brecon Sound Forage</h1>
</header>

<main>
  <slot />
</main>

<footer>
  <p>
    &copy; {new Date().getFullYear()}
    <a href="https://mattcook.dev">Matt Cook</a>
  </p>
</footer>

<style>
  header,
  footer {
    color: #333333;
    padding: 2rem 0;
    width: 100vw;
    padding: 2rem 2rem;
    max-width: 70rem;
  }

  footer {
    border-top: 1px solid #333333;
  }
</style>
