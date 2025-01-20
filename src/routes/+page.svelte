<script lang="ts">
	import urlFor from '$lib/sanityImage.js';
	import * as Card from '$lib/components/ui/card';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as AspectRatio from '$lib/components/ui/aspect-ratio';
	import type { Book } from '$lib/types';
	import Header from '$lib/components/Header.svelte';

	let { data }: { data: { books: Book[] } } = $props();
	let dominantColor = $state('rgba(255,255,255,0)');

	// Function to get dominant color from image
	async function getDominantColor(imageUrl: string): Promise<string> {
		const img = new Image();
		img.crossOrigin = 'Anonymous';

		return new Promise<string>((resolve) => {
			img.onload = () => {
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');
				const sampleSize = 50; // Sample every Nth pixel for performance

				canvas.width = img.width;
				canvas.height = img.height;
				ctx?.drawImage(img, 0, 0);

				const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height).data;
				if (!imageData) return resolve('rgba(255,255,255,0)');

				// Store color frequencies
				const colorMap = new Map<string, number>();

				// Sample pixels and count color frequencies
				for (let i = 0; i < imageData.length; i += 4 * sampleSize) {
					const r = Math.floor(imageData[i] / 16) * 16; // Quantize to 16 levels
					const g = Math.floor(imageData[i + 1] / 16) * 16;
					const b = Math.floor(imageData[i + 2] / 16) * 16;

					// Skip very dark or very light colors
					if (r + g + b < 50 || r + g + b > 720) continue;

					const key = `${r},${g},${b}`;
					colorMap.set(key, (colorMap.get(key) || 0) + 1);
				}

				// Find the most frequent color
				let maxFreq = 0;
				let dominantRGB = [255, 255, 255];

				colorMap.forEach((freq, color) => {
					if (freq > maxFreq) {
						maxFreq = freq;
						dominantRGB = color.split(',').map(Number);
					}
				});

				// Add a slight blur effect with multiple colors
				const [r, g, b] = dominantRGB;
				resolve(`rgba(${r},${g},${b},0.3)`);
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
	class="min-h-screen transition-all duration-500 ease-in-out"
	style="background-color: {dominantColor}"
>
	<div class="container py-12">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
			{#each data.books as book}
				<HoverCard.Root>
					<HoverCard.Trigger asChild>
						<Card.Root
							class="group overflow-hidden transition-all duration-300 hover:scale-105"
							onmouseenter={() => handleHover(urlFor(book.image).url())}
							onmouseleave={handleMouseLeave}
						>
							<a href={`/${book.slug.current}`} class="block">
								<Card.Content class="p-0">
									<AspectRatio.Root ratio={3 / 4}>
										<img
											src={urlFor(book.image).width(600).url()}
											alt={book.title}
											class="h-full w-full object-cover transition-transform"
										/>
										<div
											class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-100"
										></div>
										<div class="absolute bottom-0 p-6">
											<Card.Title class="text-2xl text-white">
												{book.title}
											</Card.Title>
											{#if book.status}
												<Card.Description class="mt-2 text-white/80">
													{book.status}
												</Card.Description>
											{/if}
										</div>
									</AspectRatio.Root>
								</Card.Content>
							</a>
						</Card.Root>
					</HoverCard.Trigger>
					<HoverCard.Content class="w-80">
						<div class="space-y-2">
							<h4 class="text-sm font-semibold">{book.title}</h4>
							{#if book.preface}
								<p class="text-sm text-muted-foreground">
									{book.preface[0].children[0].text}
								</p>
							{/if}
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			{/each}
		</div>
	</div>
</main>
