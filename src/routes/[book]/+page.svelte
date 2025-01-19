<script lang="ts">
	import { page } from '$app/state';

	let { data } = $props();
</script>

<main>
	<h1>{data.book.title}</h1>
	{#each data.book.pages as poem}
		<a href={`${page.params.slug}/${poem.slug.current}`}>
			<p>{poem.title}</p>
		</a>
	{/each}
</main>
