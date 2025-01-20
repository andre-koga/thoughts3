<script lang="ts">
	import urlFor from '$lib/sanityImage.js';

	let { data } = $props();
</script>

<main class="max-w-4xl mx-auto px-4 py-8">
	<h1 class="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
	<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each data.books as book}
			<li class="transition-transform hover:scale-105">
				<a 
					href={`/${book.slug.current}`}
					class="block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
				>
					<img 
						src={urlFor(book.image).height(300).width(200).url()} 
						alt="Book cover"
						class="w-full h-[300px] object-cover" 
					/>
					<div class="p-4">
						<h2 class="text-xl font-semibold">
							{book.title}
						</h2>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</main>
