import { writable } from 'svelte/store';
import type { Book } from '$lib/sanityTypes';

export const currentBook = writable<Book | null>(null); 