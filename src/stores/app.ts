import { writable } from 'svelte/store';
import type { Article } from '../interfaces';

export const detail = writable<Article | null>(null);
