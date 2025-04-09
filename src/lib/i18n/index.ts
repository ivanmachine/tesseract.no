import { DEFAULT_LOCALE } from "$lib/CONSTANTS";
import { init, register } from "svelte-i18n";

register("en", () => import("./en.json"));
register("no", () => import("./no.json"));

init({
  fallbackLocale: DEFAULT_LOCALE,
});
