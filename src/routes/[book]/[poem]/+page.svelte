<script lang="ts">
	let { data } = $props();

	import { PortableText } from '@portabletext/svelte';
</script>

<main>
	<article class="prose prose-zinc">
		<h1>{data.poem.title}</h1>

		<PortableText value={data.poem.content} />
	</article>
</main>
