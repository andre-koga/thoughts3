<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let { children, book } = $props();

	let defaultColors = ['#717B70', '#F9C1E4', '#F99287'];

	function hexToRgba(hex: string, alpha = 1) {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}

	// Create tweened stores for each color component
	const color1 = new Tween(defaultColors[0], { duration: 1000, easing: cubicOut });
	const color2 = new Tween(defaultColors[1], { duration: 1000, easing: cubicOut });
	const color3 = new Tween(defaultColors[2], { duration: 1000, easing: cubicOut });

	$effect(() => {
		if (book?.colors) {
			color1.target = hexToRgba(book.colors[0].hex, 0.8);
			color2.target = hexToRgba(book.colors[1].hex, 0.8);
			color3.target = hexToRgba(book.colors[2].hex, 0.8);
		} else {
			color1.set(defaultColors[0]);
			color2.set(defaultColors[1]);
			color3.set(defaultColors[2]);
		}
	});
</script>

<!-- TODO: MAKE THE BG ANIMATE -->

<main
	class="min-h-screen"
	style="background: linear-gradient(135deg, {color1.current}, {color2.current}, {color3.current})"
>
	{@render children()}
</main>
