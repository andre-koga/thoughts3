<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { ModeWatcher } from 'mode-watcher';
	import Header from '$lib/components/Header.svelte';
</script>

<ModeWatcher />

<div class="min-h-screen">
	<Header />
	{@render children()}
</div>
