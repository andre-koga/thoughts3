<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import LightSwitch from '$lib/components/LightSwitch.svelte';
	import { ModeWatcher } from 'mode-watcher';
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
</script>

<ModeWatcher />

<div class="min-h-screen">
	<header class="border-b">
		<div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
			<nav>
				<a
					href="/"
					class="text-xl font-bold text-gray-800 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
				>
					My Blog
				</a>
			</nav>
			<div class="flex items-center gap-4">
				<LightSwitch />
			</div>
		</div>
		<div class="mx-auto max-w-3xl px-4 py-2">
			<Breadcrumbs />
		</div>
	</header>

	{@render children()}
</div>
