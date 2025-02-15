<script lang="ts">
	import { page } from '$app/state';
	import urlFor from '$lib/sanityImage';
	import { PortableText } from '@portabletext/svelte';
	import * as Card from '$lib/components/ui/card';
	import * as AspectRatio from '$lib/components/ui/aspect-ratio';
	import { currentBook } from '$lib/stores/book';

	let { data } = $props();

	$effect(() => {
		currentBook.set(data.book);
	});
</script>

<div class="container sm:grid sm:grid-cols-2 sm:gap-2">
	<Card.Root class="overflow-hidden transition-all">
		<Card.Content class="p-0">
			<AspectRatio.Root ratio={1 / 1.414}>
				<img
					src={urlFor(data.book.image).width(600).url()}
					alt={data.book.title}
					class="h-full w-full scale-105 object-cover blur-[2px] brightness-75 saturate-150"
				/>

				<div class="absolute -bottom-4 -mx-12 h-[40%] w-[140%] overflow-hidden text-center">
					<Card.Title
						class="break-words text-5xl font-normal uppercase text-white mix-blend-exclusion"
					>
						{data.book.title.repeat(10)}
					</Card.Title>
				</div>
				<div class=""></div>
			</AspectRatio.Root>
		</Card.Content>
	</Card.Root>

	<div class="space-y-2">
		<h2 class="text-2xl font-semibold">Poems</h2>
		<div class="flex flex-wrap gap-2">
			{#each data.book.pages as poem}
				<Card.Root class="text-center transition-all hover:scale-[0.98]">
					<a href={`${page.params.book}/${poem.slug.current}`}>
						<Card.Header class="m-0 px-2 py-1.5">
							<Card.Title>{poem.title}</Card.Title>
						</Card.Header>
					</a>
				</Card.Root>
			{/each}
		</div>
	</div>
</div>
