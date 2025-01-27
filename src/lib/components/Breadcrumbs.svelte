<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb';
	import { page } from '$app/state';

	const path = $derived(page.url.pathname);
	const segments = $derived(
		path
			.split('/')
			.filter(Boolean)
			.map((segment: string, index: number, array: string[]) => ({
				name: decodeURIComponent(segment),
				href: '/' + array.slice(0, index + 1).join('/')
			}))
	);
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		<Breadcrumb.Item>
			<Breadcrumb.Link
				class="rounded-full bg-black/20 px-2 py-0.5 text-white transition-all hover:scale-95"
				href="/">Home</Breadcrumb.Link
			>
		</Breadcrumb.Item>
		{#each segments as segment}
			<Breadcrumb.Separator />
			<Breadcrumb.Item>
				{#if segment === segments[segments.length - 1]}
					<Breadcrumb.Page class="rounded-lg bg-black/50 px-2 py-0.5 text-white"
						>{segment.name}</Breadcrumb.Page
					>
				{:else}
					<Breadcrumb.Link
						class="rounded-full bg-black/20 px-2 py-0.5 text-white transition-all hover:scale-95"
						href={segment.href}>{segment.name}</Breadcrumb.Link
					>
				{/if}
			</Breadcrumb.Item>
		{/each}
	</Breadcrumb.List>
</Breadcrumb.Root>
