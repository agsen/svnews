<script lang="ts">
	import { Modal, Button, P, Input, Spinner } from 'flowbite-svelte';
	import { SearchOutline } from 'flowbite-svelte-icons';
	import { debounce } from 'lodash';
	import apiRequest from '../utils/apiRequest';
	import { useQuery } from '@sveltestack/svelte-query';
	import CardNews from './CardNews.svelte';
	import type { NewsResponse } from '../interfaces';
	import cleanDataArticles from '../utils/cleanDataArticles';

	let showModal = false;
	const toggleModal = () => (showModal = !showModal);

	let searchText = '';

	const debouncedInput = debounce((event: Event) => {
		const target = event.target as HTMLInputElement;
		searchText = target.value;
	}, 500);

	$: result = useQuery(
		['news-search', searchText],
		() =>
			apiRequest({
				method: 'GET',
				url: 'everything',
				params: {
					q: searchText
				}
			}).then((res) => res?.data as NewsResponse),
		{ enabled: !!searchText }
	);

	$: newsList = cleanDataArticles($result.data?.articles);
</script>

<Button color="alternative" size="xs" on:click={toggleModal}>
	<SearchOutline />
	<P class="pl-2">Seach News</P></Button
>
<Modal title="Search News" bind:open={showModal} autoclose>
	<Input
		on:input={debouncedInput}
		size="lg"
		placeholder="Search news title"
		defaultClass="my-4 w-full"
	/>

	{#if $result.isLoading}
		<div class="flex justify-center w-full">
			<Spinner />
		</div>
	{/if}

	<div class="grid xs:grid-cols-1 md:grid-cols-2 gap-4 overflow-auto max-h-[60vh]">
		{#each newsList as news}
			<CardNews {news} callbackClickCard={toggleModal} />
		{/each}
	</div>
</Modal>
