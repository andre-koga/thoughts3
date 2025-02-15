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

<div class="container space-y-12">
	<Card.Root class="overflow-hidden">
		<div class="flex flex-col gap-8 p-6 md:flex-row">
			<div class="md:w-1/3">
				<AspectRatio.Root ratio={3 / 4}>
					<img
						src={urlFor(data.book.image).width(400).url()}
						alt="Book cover"
						class="h-full w-full scale-105 object-cover blur-sm"
					/>
				</AspectRatio.Root>
			</div>
			<div class="md:w-2/3">
				<Card.Header>
					<Card.Title class="text-4xl">{data.book.title}</Card.Title>
					{#if data.book.status}
						<Card.Description class="text-lg">
							<span
								class="rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary-foreground"
							>
								{data.book.status}
							</span>
						</Card.Description>
					{/if}
				</Card.Header>
				<Card.Content class="prose dark:prose-invert">
					<PortableText value={data.book.preface} />
				</Card.Content>
			</div>
		</div>
	</Card.Root>

	<div class="space-y-6">
		<h2 class="text-2xl font-semibold">Poems</h2>
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{#each data.book.pages as poem}
				<Card.Root class="transition-all hover:scale-[0.98]">
					<a href={`${page.params.book}/${poem.slug.current}`}>
						<Card.Header>
							<Card.Title>{poem.title}</Card.Title>
						</Card.Header>
					</a>
				</Card.Root>
			{/each}
		</div>
	</div>
</div>
