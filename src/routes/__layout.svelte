<script lang="ts">
  import "sanitize.css/sanitize.css"
  import "sanitize.css/assets.css"
  import "sanitize.css/reduce-motion.css"
  import "sanitize.css/typography.css"
  import "../styles/app.scss"
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

<style lang="scss">
  p {
    padding-bottom: 2rem;
    margin: 0.4rem;
    &:last-child {
      padding-bottom: 0;
    }
  }

  header,
  footer {
    width: 100vw;
    color: var(--grey-800);
  }

  header {
    max-width: 70rem;
    padding: 2rem;
    margin: auto;
  }

  footer {
    border-top: 1px solid var(--grey-800);
    div {
      max-width: 70rem;
      padding: 2rem;
      margin: auto;
    }
  }
</style>
