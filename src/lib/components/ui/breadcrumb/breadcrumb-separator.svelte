<script lang="ts">
	import type { HTMLLiAttributes } from 'svelte/elements';
	import { ArrowRight } from 'lucide-svelte';
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLLiAttributes & {
		el?: HTMLLIElement;
	};

	export let el: $$Props['el'] = undefined;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<li
	role="presentation"
	aria-hidden="true"
	class={cn('text-white [&>svg]:size-3.5', className)}
	bind:this={el}
	{...$$restProps}
>
	<slot>
		<ArrowRight size={16} />
	</slot>
</li>
