<script lang="ts">
	import urlFor from '$lib/sanityImage.js';

	let { data } = $props();
</script>

<main>
	<h1>Blog Posts</h1>
	<ul>
		{#each data.books as book}
			<li>
				<a href={`/${book.slug.current}`}
					><p>
						{book.title}
					</p>
					<img src={urlFor(book.image).height(300).width(200).url()} alt="Book cover" />
				</a>
			</li>
		{/each}
	</ul>
</main>
