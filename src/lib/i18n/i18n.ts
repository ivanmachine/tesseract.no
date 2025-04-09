import { register, init } from "svelte-i18n";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "$lib/CONSTANTS";

// Register all languages (static or dynamic)
register("en", () => import("./en.json"));
register("no", () => import("./no.json"));

export function initI18n(locale: string) {
  init({
    fallbackLocale: DEFAULT_LOCALE,
    initialLocale: locale,
  });
}
