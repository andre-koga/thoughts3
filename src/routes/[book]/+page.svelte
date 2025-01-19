<script lang="ts">
	import { page } from '$app/state';
	import { PortableText } from '@portabletext/svelte';

	let { data } = $props();
</script>

<main>
	<h1>{data.book.title}</h1>
	<PortableText value={data.book.preface} />
	{#each data.book.pages as poem}
		<a href={`${page.params.book}/${poem.slug.current}`}>
			<p>{poem.title}</p>
		</a>
	{/each}
</main>
