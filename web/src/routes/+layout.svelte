<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import GlobalStyles from '$lib/GlobalStyles.svelte';
	import Header from '$lib/Header.svelte';
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<title>Brecon Sound Forage</title>
	<meta
		name="description"
		content="An artscape residency at the Island Fields in Brecon, Mid Wales"
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<GlobalStyles>
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</GlobalStyles>
