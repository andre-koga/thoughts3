<script lang="ts">
	import { Asterisk, Badge, Blend, CircleDashed } from 'lucide-svelte';
	import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<header
	class="fixed bottom-8 left-1/2 z-50 w-full max-w-4xl -translate-x-1/2 rounded-full bg-black bg-opacity-60 text-white"
>
	<div class="container flex h-16 items-center justify-between gap-3">
		<a href="/" class="flex items-center gap-2">
			<CircleDashed size={28} />
			<span class="text-3xl">thoughts</span>
		</a>
		<div class="flex-grow"></div>
		<Breadcrumbs />
	</div>
</header>
