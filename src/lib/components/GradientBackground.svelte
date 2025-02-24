<script lang="ts">
	import { Tween } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	let { children, book, classNames } = $props();

	let defaultColors = ['#717B70', '#F9C1E4', '#F99287'];

	function hexToRgba(hex: string, alpha = 1) {
		const r = parseInt(hex.slice(1, 3), 16);
		const g = parseInt(hex.slice(3, 5), 16);
		const b = parseInt(hex.slice(5, 7), 16);
		return `rgba(${r}, ${g}, ${b}, ${alpha})`;
	}

	let color1 = $state(defaultColors[0]);
	let color2 = $state(defaultColors[1]);
	let color3 = $state(defaultColors[2]);

	let size1 = $state(50);
	let size2 = $state(100);

	// Animate sizes continuously
	function animateSize() {
		const time = Date.now() / 1000; // Convert to seconds
		// Use sin to create smooth oscillation between 50 and 100
		// Sin produces values between -1 and 1, so we:
		// 1. Add 1 to get values 0 to 2
		// 2. Multiply by 25 to get range of 50
		// 3. Add 50 to center around 75
		size1 = 70 + (Math.sin(time) + 1) * 35;
		// Offset second circle by π/2 (90 degrees) to create alternating pattern
		size2 = 70 + (Math.sin(time + Math.PI / 2) + 1) * 35;

		// Request next animation frame
		requestAnimationFrame(animateSize);
	}

	$effect(() => {
		if (book?.colors) {
			color1 = hexToRgba(book.colors[0].hex, 0.9);
			color2 = hexToRgba(book.colors[1].hex, 0.9);
			color3 = hexToRgba(book.colors[2].hex, 0.9);
		} else {
			color1 = defaultColors[0];
			color2 = defaultColors[1];
			color3 = defaultColors[2];
		}
	});

	// Start the animation when the component mounts
	$effect.root(() => {
		animateSize();
	});
</script>

<main
	class="relative min-h-[100vh] overflow-hidden rounded-3xl border-2 border-orange-50 transition-all duration-1000 md:border-8 {classNames}"
	style="background-color: {color3}"
>
	<div
		class="pointer-events-none fixed inset-0 left-0 top-0 z-10 h-screen w-screen mix-blend-overlay backdrop-blur-[100px]"
		style="background-image: url('/noise.svg')"
		aria-hidden="true"
	></div>
	<!-- Animated circles -->
	<div
		class="fixed left-0 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-1000"
		style="
			background-color: {color1};
			width: {size1}vh;
			height: {size1}vh;
			opacity: 0.6;
		"
	></div>
	<div
		class="fixed right-0 top-[100vh] -translate-y-1/2 translate-x-1/2 rounded-full transition-all duration-1000"
		style="
			background-color: {color2};
			width: {size2}vh;
			height: {size2}vh;
			opacity: 0.6;
		"
	></div>

	<!-- Content -->
	<div class="relative z-10">
		{@render children()}
	</div>
</main>
