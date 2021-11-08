<script lang="ts">
  import "../app.scss"
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
