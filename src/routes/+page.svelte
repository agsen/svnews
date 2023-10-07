<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import { Button, Spinner } from 'flowbite-svelte';
	import type { Article, NewsResponse } from '../interfaces';
	import apiRequest from '../utils/apiRequest';
	import CardNews from '../components/CardNews.svelte';
	import cleanDataArticles from '../utils/cleanDataArticles';

	let page = 1;
	let allArticles: Article[] = [];

	$: result = useQuery(['headline', page], () =>
		apiRequest({
			method: 'GET',
			url: 'top-headlines',
			params: {
				country: 'id',
				page,
				pageSize: 17
			}
		}).then((res) => res?.data as NewsResponse)
	);

	$: {
		const list = cleanDataArticles($result?.data?.articles);
		allArticles = [...allArticles, ...list];
	}

	const handleLoadMore = () => {
		page = page + 1;
	};
</script>

<div class="pt-8 grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
	{#each allArticles as news}
		<CardNews {news} />
	{/each}
</div>

{#if $result.isLoading}
	<div class="flex justify-center items-center w-full h-screen">
		<Spinner />
	</div>
{/if}

<Button class="w-full my-6" on:click={handleLoadMore}>Load more ...</Button>
