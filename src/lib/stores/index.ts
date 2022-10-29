import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export const activeNumber: Writable<null | number> = writable(null);
