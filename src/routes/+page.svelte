<script lang="ts">
	let { data } = $props();
</script>

<main>
	<h1>Blog Posts</h1>
	<ul>
		{#each data.books as book}
			<li><a href={`/${book.slug.current}`}>{book.title}</a></li>
		{/each}
	</ul>
</main>
