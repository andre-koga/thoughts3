<script lang="ts">
	import { page } from '$app/state';
	import urlFor from '$lib/sanityImage';
	import { PortableText } from '@portabletext/svelte';

	let { data } = $props();
</script>

<div class="flex flex-col gap-8 md:flex-row">
	<div class="md:w-1/3">
		<img
			src={urlFor(data.book.image).width(300).url()}
			alt="Book cover"
			class="w-full rounded-lg shadow-lg"
		/>
	</div>
	<div class="md:w-2/3">
		<h1 class="mb-6 text-4xl font-bold text-gray-900 dark:text-white">{data.book.title}</h1>
		<div class="prose max-w-none dark:prose-invert">
			<PortableText value={data.book.preface} />
		</div>
	</div>
</div>

<div class="mt-12">
	<h2 class="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-200">Poems</h2>
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each data.book.pages as poem}
			<a
				href={`${page.params.book}/${poem.slug.current}`}
				class="block rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg dark:bg-gray-800"
			>
				<p class="text-lg font-medium text-gray-900 dark:text-white">{poem.title}</p>
			</a>
		{/each}
	</div>
</div>
