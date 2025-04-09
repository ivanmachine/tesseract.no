import { DEFAULT_LOCALE, type Locales } from "$lib/CONSTANTS";
import { writable } from "svelte/store";

export const locale = writable<Locales>(DEFAULT_LOCALE);
