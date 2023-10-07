<script>
	import { Navbar, NavBrand, DarkMode, P } from 'flowbite-svelte';
	import Search from './Search.svelte';
</script>

<Navbar>
	<NavBrand href="/">
		<P size="3xl" weight="bold" class="pl-3">SVNews</P>
	</NavBrand>
	<div class="flex gap-1">
		<Search />
		<DarkMode />
	</div>
</Navbar>
