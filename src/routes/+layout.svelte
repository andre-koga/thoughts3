<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Header from '$lib/components/Header.svelte';
</script>

<div class="dark relative min-h-screen font-serif">
	<Header />
	<div
		class="pointer-events-none fixed inset-0 left-0 top-0 h-screen w-screen bg-[url('images/noise.svg')] mix-blend-overlay"
		aria-hidden="true"
	></div>
	{@render children()}
</div>
