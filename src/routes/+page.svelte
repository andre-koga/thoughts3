<script lang="ts">
	import urlFor from '$lib/sanityImage.js';
	import * as Card from '$lib/components/ui/card';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as AspectRatio from '$lib/components/ui/aspect-ratio';
	import type { Book } from '$lib/types';
	import GradientBackground from '$lib/components/GradientBackground.svelte';

	let { data }: { data: { books: Book[] } } = $props();
	let currentBook = $state<Book | null>(null);
</script>

<GradientBackground book={currentBook}>
	<div class="container py-12">
		<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
			{#each data.books as book}
				<HoverCard.Root>
					<HoverCard.Trigger asChild>
						<Card.Root
							class="group overflow-hidden transition-all duration-300 hover:scale-105"
							onmouseenter={() => (currentBook = book)}
							onmouseleave={() => (currentBook = null)}
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
</GradientBackground>
