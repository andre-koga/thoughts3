<script lang="ts">
	import { CircleDotDashed } from 'lucide-svelte';
	import Breadcrumbs from './Breadcrumbs.svelte';
</script>

<header
	class="relative z-50 w-full bg-gradient-to-b from-black/20 to-transparent p-2 py-4 text-white sm:p-4 md:p-8"
>
	<div
		class="flex flex-col items-center justify-start gap-2 px-2 md:container sm:gap-8 md:flex-row"
	>
		<a href="/" class="flex items-center gap-1 transition-all hover:scale-[0.98] md:gap-2">
			<CircleDotDashed class="h-6 w-6 md:h-8 md:w-8" />
			<span class="text-3xl md:text-4xl">thoughts</span>
		</a>
		<Breadcrumbs />
	</div>
</header>
