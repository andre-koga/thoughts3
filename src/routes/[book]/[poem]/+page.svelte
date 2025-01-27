<script lang="ts">
	let { data } = $props();
	import { PortableText } from '@portabletext/svelte';
	import PoemSidebar from '$lib/components/PoemSidebar.svelte';
	import * as Card from '$lib/components/ui/card';
	import * as ScrollArea from '$lib/components/ui/scroll-area';
	import { Separator } from '$lib/components/ui/separator';
</script>

<div class="min-h-screen">
	<div class="container mx-auto flex max-w-6xl gap-8 px-4 py-8">
		<ScrollArea.Root class="h-[calc(100vh-8rem)] w-64">
			<PoemSidebar bookWithPages={data.bookWithPages} currentPoemId={data.poem.slug?.current} />
		</ScrollArea.Root>

		<Card.Root class="flex-1">
			<Card.Header>
				<Card.Title class="text-center text-3xl">{data.poem.title}</Card.Title>
				<Card.Description class="text-center">
					{data.poem.date ? new Date(data.poem.date).toLocaleDateString() : ''}
				</Card.Description>
			</Card.Header>
			<Separator />
			<Card.Content class="font-type prose prose-zinc max-w-none pt-6 dark:prose-invert">
				<PortableText value={data.poem.content} />
			</Card.Content>
		</Card.Root>
	</div>
</div>
