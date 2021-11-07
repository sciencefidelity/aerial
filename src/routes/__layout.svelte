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
  <div>
    <p>
      &copy; {new Date().getFullYear()}
      <a href="https://mattcook.dev">Matt Cook</a>
    </p>
  </div>
</footer>

<style>
  header,
  footer {
    color: #333333;
    width: 100vw;
  }

  header {
    margin: auto;
    max-width: 70rem;
    padding: 2rem 2rem;
  }

  footer {
    border-top: 1px solid #333333;
  }

  footer div {
    margin: auto;
    max-width: 70rem;
    padding: 2rem 2rem;
  }
</style>
