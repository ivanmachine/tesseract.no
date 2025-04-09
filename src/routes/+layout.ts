// src/routes/+layout.ts
import { browser } from "$app/environment";
import { redirect } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";
import {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  type Locales,
} from "$lib/CONSTANTS";

export const load: LayoutLoad = ({ url }) => {
  // 1. If this is on the server, do nothing
  if (!browser) return;

  // 2. Check if the URL contains a locale
  const path = url.pathname;
  const firstSegment = path.split("/")[1];
  const hasLocaleInURL = SUPPORTED_LOCALES.includes(firstSegment as Locales);

  // 3. If the URL contains a locale, store it in localStorage, and render the page.
  if (hasLocaleInURL) {
    window && window.localStorage.setItem("locale", firstSegment as Locales);
    return {
      locale: firstSegment as Locales,
    };
  }

  // 4. Set locale to the default locale, which will be overridden if the user has a stored locale.
  let locale = DEFAULT_LOCALE;

  // 5. Check localStorage for a locale.
  const storedLocale = localStorage.getItem("locale");
  if (storedLocale === "en" || storedLocale === "no") {
    // 6. If the locale is supported, set the locale to the stored locale.
    locale = storedLocale;
  }

  // 7. Redirect to the new path.
  const newPath = `/${locale}${path}`;
  throw redirect(307, newPath);
};
