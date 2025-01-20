<script lang="ts">
	let { bookWithPages, currentPoemId } = $props();
	console.log('bookWithPages', bookWithPages);
	console.log('currentPoemId', currentPoemId);

	import * as Card from '$lib/components/ui/card';
</script>

<Card.Root class="w-64 rounded-3xl border-0 bg-secondary/20 p-4 shadow-none">
	<Card.Header class="pb-4">
		<Card.Title class="text-lg">Poems in this book</Card.Title>
	</Card.Header>
	<Card.Content class="p-0">
		<ul class="space-y-2">
			{#each bookWithPages.pages as poem}
				<li>
					<a
						href="./{poem.slug?.current}"
						class="block rounded-2xl px-4 py-2 text-sm transition-colors {poem.slug?.current ===
						currentPoemId
							? 'bg-primary text-primary-foreground'
							: 'hover:bg-secondary/50'}"
					>
						{poem.title}
					</a>
				</li>
			{/each}
		</ul>
	</Card.Content>
</Card.Root>
