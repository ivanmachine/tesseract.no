import { goto as _goto } from "$app/navigation";
import { locale as localeStore } from "$lib/stores/ui_store";

export function goto(path: string) {
  const locale = localeStore.subscribe((locale) => locale);
  _goto(`/${locale}/${path}`);
}
