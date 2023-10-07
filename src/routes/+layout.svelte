<script>
	import '../app.css';
	import Navbar from '../components/Navbar.svelte';
	import { QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
	import relativeTime from 'dayjs/plugin/relativeTime';
	import localizedFormat from 'dayjs/plugin/localizedFormat';

	import dayjs from 'dayjs';

	dayjs.extend(relativeTime);
	dayjs.extend(localizedFormat);

	const queryClient = new QueryClient({
		defaultOptions: { queries: { refetchOnWindowFocus: false } }
	});
</script>

<QueryClientProvider client={queryClient}>
	<Navbar />
	<div class="px-6 dark:bg-slate-900 min-h-screen"><slot /></div>
</QueryClientProvider>
