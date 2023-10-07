<script lang="ts">
	import { detail } from '../../../stores/app';
	import type { Article } from '../../../interfaces';
	import dayjs from 'dayjs';
	import { Avatar, Button, P } from 'flowbite-svelte';
	import { goto } from '$app/navigation';

	let detailData: Article | null = null;
	detail.subscribe((value) => {
		detailData = value;
	});

	const goBack = () => {
		goto('/');
	};

	const goToSource = (url: string | undefined) => () => {
		if (!url) return;
		window.open(url, '_blank');
	};
</script>

<div class="flex justify-center">
	<div class="md:w-[50vw] xs:w-screen">
		<Button color="alternative" size="xs" class="mb-4" on:click={goBack}>Back</Button>

		<P size="3xl" weight="bold" class="mb-2">
			{detailData?.title}
		</P>
		<div class="flex gap-2 items-center mb-4">
			<Avatar size="xs" />
			<P size="xs">{detailData?.author}</P>
		</div>
		<div class="flex gap-4 mb-4">
			<P class="!text-green-500">{detailData?.source?.name}</P>
			<P>{dayjs(detailData?.publishedAt).format('LLLL')}</P>
		</div>
		<img class="mb-4" src={detailData?.urlToImage} alt={detailData?.title} />
		<P class="mb-4">{detailData?.content}</P>
		<Button class="w-full mb-8" on:click={goToSource(detailData?.url)} color="alternative"
			>Visit source news</Button
		>
	</div>
</div>
