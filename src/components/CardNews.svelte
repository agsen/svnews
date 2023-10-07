<script lang="ts">
	import { Card, P } from 'flowbite-svelte';
	import type { Article } from '../interfaces';
	import dayjs from 'dayjs';
	import { detail } from '../stores/app';
	import { goto } from '$app/navigation';

	const IMAGE_PLACEHOLDER = 'https://fakeimg.pl/800x400?text=No+image';

	export let news: Article | null = null;
	export let callbackClickCard = () => {};

	const handleClikCard = () => {
		if (!news?.content) return;
		detail.set(news);
		callbackClickCard();
		setTimeout(() => {
			goto(`/detail/${news?.title}`);
		}, 300);
	};
</script>

<Card class="cursor-pointer hover:translate-y-1" on:click={handleClikCard}>
	<img
		class="rounded-md mb-2 h-32 object-cover"
		src={news?.urlToImage || IMAGE_PLACEHOLDER}
		alt={news?.title}
	/>
	<P class="mb-2">
		{news?.title}
	</P>
	<P class="!text-green-500 mb-2">
		{news?.source?.name}
	</P>
	<P size="xs">{dayjs(news?.publishedAt).fromNow()}</P>
</Card>
