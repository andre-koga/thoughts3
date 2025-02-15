<script lang="ts">
	import '../app.css';
	import { currentBook } from '$lib/stores/book';
	let { children } = $props();

	import Header from '$lib/components/Header.svelte';
	import GradientBackground from '$lib/components/GradientBackground.svelte';
</script>

<GradientBackground book={$currentBook} classNames="dark relative min-h-screen font-serif">
	<Header />
	{@render children()}
</GradientBackground>
