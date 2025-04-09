import { initI18n } from "$lib/i18n/i18n";
import type { LayoutLoad } from "../$types";

export const load: LayoutLoad = async ({ parent }) => {
  const parentData = await parent();
  const locale = parentData.locale;
  initI18n(locale);
  return {};
};
