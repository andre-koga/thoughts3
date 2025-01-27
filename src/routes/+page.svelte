<script lang="ts">
	import urlFor from '$lib/sanityImage.js';
	import * as Card from '$lib/components/ui/card';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as AspectRatio from '$lib/components/ui/aspect-ratio';
	import type { Book } from '$lib/types';

	let { data }: { data: { books: Book[] } } = $props();
	let currentBook = $state<Book | null>(null);
</script>

<div class="px-2 sm:container">
	<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
		{#each data.books as book}
			<HoverCard.Root>
				<HoverCard.Trigger asChild>
					<Card.Root
						class="overflow-hidden transition-all hover:scale-[0.98]"
						onmouseenter={() => (currentBook = book)}
						onmouseleave={() => (currentBook = null)}
					>
						<a href={`/${book.slug.current}`} class="block">
							<Card.Content class="p-0">
								<AspectRatio.Root ratio={1 / 1.414}>
									<img
										src={urlFor(book.image).width(600).url()}
										alt={book.title}
										class="h-full w-full scale-105 object-cover blur-[2px]"
									/>
									<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
										<Card.Title class="font-normal text-white">
											{book.title}
										</Card.Title>
									</div>
									<div class="absolute right-2 top-2">
										{#if book.status == 'finished'}
											<Card.Description
												class="rounded-full bg-white/20 px-2 py-0.5 text-center text-xs"
												>finished
											</Card.Description>
										{:else if book.status == 'ongoing'}
											<Card.Description
												class="rounded-full bg-white/20 px-2 py-0.5 text-center text-xs"
												>ongoing
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
