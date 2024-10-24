<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

{@render children()}

<style global>
	:root {
		--grey-000: hsl(0, 0%, 100%);
		--grey-050: hsl(0, 0%, 95%);
		--grey-100: hsl(0, 0%, 90%);
		--grey-150: hsl(0, 0%, 85%);
		--grey-200: hsl(0, 0%, 80%);
		--grey-250: hsl(0, 0%, 75%);
		--grey-300: hsl(0, 0%, 70%);
		--grey-350: hsl(0, 0%, 65%);
		--grey-400: hsl(0, 0%, 60%);
		--grey-450: hsl(0, 0%, 55%);
		--grey-500: hsl(0, 0%, 50%);
		--grey-550: hsl(0, 0%, 45%);
		--grey-600: hsl(0, 0%, 40%);
		--grey-650: hsl(0, 0%, 35%);
		--grey-700: hsl(0, 0%, 30%);
		--grey-750: hsl(0, 0%, 25%);
		--grey-800: hsl(0, 0%, 20%);
		--grey-850: hsl(0, 0%, 15%);
		--grey-900: hsl(0, 0%, 10%);
		--grey-950: hsl(0, 0%, 05%);
	}

	/* RESET */
	*,
	::before,
	::after {
		box-sizing: border-box;
		border-width: 0;
		border-style: solid;
		border-color: currentColor;
	}
	html {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		-moz-tab-size: 4;
		tab-size: 4;
		font-family:
			ui-sans-serif,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial,
			'Noto Sans',
			sans-serif,
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji';
		font-feature-settings: normal;
		font-variation-settings: normal;
	}
	body {
		margin: 0;
		line-height: inherit;
	}
	hr {
		height: 0;
		color: inherit;
		border-top-width: 1px;
	}
	abbr:where([title]) {
		text-decoration: underline dotted;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: inherit;
	}
	a {
		color: inherit;
		text-decoration: inherit;
	}
	b,
	strong {
		font-weight: bolder;
	}
	code,
	kbd,
	samp,
	pre {
		font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
			'Courier New', monospace;
	}
	small {
		font-size: 80%;
	}
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}
	sub {
		bottom: -0.25em;
	}
	sup {
		top: -0.5em;
	}
	table {
		text-indent: 0;
		border-color: inherit;
		border-collapse: collapse;
	}
	button,
	input,
	optgroup,
	select,
	textarea {
		font-family: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		font-size: 100%;
		font-weight: inherit;
		line-height: inherit;
		color: inherit;
		margin: 0;
		padding: 0;
	}
	button,
	select {
		text-transform: none;
	}
	button,
	[type='button'],
	[type='reset'],
	[type='submit'] {
		padding: 0;
		border-style: solid;
		border-width: 0;
		-webkit-appearance: button;
		appearance: button;
		background-color: transparent;
		background-image: none;
	}
	:-moz-focusring {
		outline: auto;
	}
	:-moz-ui-invalid {
		box-shadow: none;
	}
	progress {
		vertical-align: baseline;
	}
	::-webkit-inner-spin-button,
	::-webkit-outer-spin-button {
		height: auto;
	}
	[type='search'] {
		-webkit-appearance: textfield;
		appearance: textfield;
		outline-offset: -2px;
	}
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}
	::-webkit-file-upload-button {
		-webkit-appearance: button;
		font: inherit;
	}
	summary {
		display: list-item;
	}
	blockquote,
	dl,
	dd,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	hr,
	figure,
	p,
	pre {
		margin: 0;
	}
	fieldset {
		margin: 0;
		padding: 0;
	}
	legend {
		padding: 0;
	}
	ol,
	ul,
	menu {
		list-style: none;
		margin: 0;
		padding: 0;
	}
	dialog {
		padding: 0;
	}
	textarea {
		resize: vertical;
	}
	input::placeholder,
	textarea::placeholder {
		opacity: 1;
		color: theme('colors.gray.400', #9ca3af);
	}
	button,
	[role='button'] {
		cursor: pointer;
	}
	:disabled {
		cursor: default;
	}
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
	}
	img,
	video {
		max-width: 100%;
		height: auto;
	}
	[hidden] {
		display: none;
	}
	/* !RESET */

	* {
		box-sizing: border-box;
		margin: 0;
	}

	* + * {
		margin-top: 1rem;
	}

	html {
		font-size: 62.5%;
		background-color: var(--grey-000);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	body {
		margin: auto;
		font-family: Inconsolata, sans-serif;
		font-size: calc(7px + 2vmin);
		line-height: 1.25;
		color: var(--grey-800);
	}

	p {
		padding-bottom: 1rem;
	}
</style>
