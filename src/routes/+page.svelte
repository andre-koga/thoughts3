<script lang="ts">
	import urlFor from '$lib/sanityImage.js';
	import * as Card from '$lib/components/ui/card';
	import * as HoverCard from '$lib/components/ui/hover-card';
	import * as AspectRatio from '$lib/components/ui/aspect-ratio';
	import { currentBook } from '$lib/stores/book';
	import type { Book } from '$lib/sanityTypes';

	let { data }: { data: { books: Book[] } } = $props();

	$effect(() => {
		currentBook.set(null);
	});
</script>

<div class="px-2 sm:container">
	<div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
		{#each data.books as book}
			<HoverCard.Root>
				<HoverCard.Trigger asChild>
					<Card.Root
						class="overflow-hidden transition-all hover:scale-[0.98]"
						onmouseenter={() => currentBook.set(book)}
						onmouseleave={() => currentBook.set(null)}
					>
						<a href={`/${book.slug.current}`} class="block">
							<Card.Content class="p-0">
								<AspectRatio.Root ratio={1 / 1.414}>
									<img
										src={urlFor(book.image).width(600).url()}
										alt={book.title}
										class="h-full w-full scale-105 object-cover blur-[2px] brightness-75 saturate-150"
									/>
									<div
										class="absolute -bottom-4 -mx-12 h-[40%] w-[140%] overflow-hidden text-center"
									>
										<Card.Title
											class="break-words text-4xl font-normal uppercase text-white mix-blend-exclusion"
										>
											{book.title.repeat(10)}
										</Card.Title>
									</div>
									<div class=""></div>
								</AspectRatio.Root>
							</Card.Content>
						</a>
					</Card.Root>
				</HoverCard.Trigger>
			</HoverCard.Root>
		{/each}
	</div>
</div>
