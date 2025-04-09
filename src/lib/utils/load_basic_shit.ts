import { locale } from "$lib/stores/ui_store";

export function load_locale() {
  const locale_from_url = window.location.pathname.split("/")[1];
  if (locale_from_url) {
    switch (locale_from_url) {
      case "en":
        locale.set("en");
        break;
      case "no":
        locale.set("no");
        break;
      default:
        locale.set("en");
        break;
    }
  }
}
