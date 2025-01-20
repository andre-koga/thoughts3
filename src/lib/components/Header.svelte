<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import Breadcrumbs from './Breadcrumbs.svelte';
	import LightSwitch from './LightSwitch.svelte';
</script>

<header
	class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
	<div class="container flex h-16 items-center justify-between">
		<a href="/" class="flex items-center space-x-2">
			<span class="text-3xl"> thoughts </span>
		</a>

		<div class="flex items-center space-x-4">
			<LightSwitch />
		</div>
	</div>
	<div class="container py-2">
		<Breadcrumbs />
	</div>
	<Separator />
</header>
