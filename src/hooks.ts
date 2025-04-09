import type { Reroute } from "@sveltejs/kit";
export const reroute: Reroute = ({ url }) => {
  return "/en/about-us";
};
