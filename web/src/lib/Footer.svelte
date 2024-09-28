<script lang="ts">
	const year = new Date().getFullYear();
</script>

<footer>
	<div>
		<p>&copy; {year} <a href="https://mattcook.dev">Matt Cook</a></p>
	</div>
</footer>

<style>
	p {
		margin-bottom: 2rem;
		margin: 0.4rem;
		&:last-child {
			padding-bottom: 0;
		}
	}

	a {
		color: hsl(200, 100%, 40%);
	}

	footer {
		width: 100vw;
		color: var(--grey-800);
		border-top: 1px solid var(--grey-800);
		div {
			max-width: 70rem;
			padding: 2rem;
			margin: auto;
		}
	}
</style>
