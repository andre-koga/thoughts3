<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import LightSwitch from '$lib/components/LightSwitch.svelte';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ModeWatcher />
<LightSwitch />

{@render children()}
