<script lang="ts">
	import urlFor from '$lib/sanityImage.js';
	import { onMount } from 'svelte';

	let { data } = $props();
	let dominantColor = $state('rgba(255,255,255,0)');

	// Function to get dominant color from image
	async function getDominantColor(imageUrl: string): Promise<string> {
		const img = new Image();
		img.crossOrigin = 'Anonymous';
		return new Promise<string>((resolve) => {
			img.onload = () => {
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');
				canvas.width = img.width;
				canvas.height = img.height;
				ctx?.drawImage(img, 0, 0);
				const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height).data;
				if (!imageData) return resolve('rgba(255,255,255,0)');

				const r = Math.floor(imageData[0]);
				const g = Math.floor(imageData[1]);
				const b = Math.floor(imageData[2]);
				resolve(`rgba(${r},${g},${b},0.5)`);
			};
			img.src = imageUrl;
		});
	}

	function handleHover(imageUrl: string) {
		getDominantColor(imageUrl).then((color) => {
			dominantColor = color;
		});
	}

	function handleMouseLeave() {
		dominantColor = 'rgba(255,255,255,0)';
	}
</script>

<main
	class="min-h-screen px-4 py-12 transition-all duration-500 ease-in-out"
	style="background-color: {dominantColor}"
>
	<ul class="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
		{#each data.books as book}
			<li
				class="transform transition-all duration-300 hover:-rotate-1 hover:scale-105"
				onmouseenter={() => handleHover(urlFor(book.image).url())}
				onmouseleave={handleMouseLeave}
			>
				<a
					href={`/${book.slug.current}`}
					class="block overflow-hidden rounded-xl border border-gray-100 bg-white/80 shadow-2xl backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/90"
				>
					<div class="relative">
						<img
							src={urlFor(book.image).height(400).width(300).url()}
							alt="Book cover"
							class="h-[400px] w-full transform object-cover transition-transform hover:scale-105"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
						></div>
					</div>
					<div class="p-6">
						<h2 class="text-2xl font-semibold tracking-tight">
							{book.title}
						</h2>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</main>
