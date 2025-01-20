<script lang="ts">
	let { data } = $props();
	import { page } from '$app/state';
	import { PortableText } from '@portabletext/svelte';
</script>

<main class="mx-auto max-w-3xl px-4 py-8">
	<article
		class="prose prose-zinc mx-auto dark:prose-invert prose-headings:text-gray-900 prose-p:min-h-1 prose-p:text-gray-700 dark:prose-headings:text-white dark:prose-p:text-gray-300"
	>
		<h1 class="mb-8 text-center">{data.poem.title}</h1>
		<PortableText value={data.poem.content} />
	</article>
</main>
