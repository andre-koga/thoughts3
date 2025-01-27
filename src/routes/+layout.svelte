<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Header from '$lib/components/Header.svelte';
	import GradientBackground from '$lib/components/GradientBackground.svelte';
	import type { Book } from '$lib/sanityTypes';

	let book = $state<Book | null>(null);
</script>

<GradientBackground {book} classNames="dark relative min-h-screen font-serif">
	<Header />
	{@render children()}
</GradientBackground>
