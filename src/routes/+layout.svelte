<script lang="ts">
  import "../app.css";
  import "$lib/i18n"; // Import to initialize
  import { locale, waitLocale } from "svelte-i18n";
  import Nav from "$lib/components/nav/Nav.svelte";
  import { load_locale } from "$lib/utils/load_basic_shit";
  import { redirect } from "@sveltejs/kit";

  $effect(() => {
    waitLocale();
    load_locale();
  });

  let { children } = $props();

  export const load: any = async ({ url, params }) => {
    const pathname = url.pathname;
    throw redirect(307, `/en${pathname}`);
  };
</script>

{#if $locale}
  <Nav />
  {@render children()}
{:else}
  Loading language...
{/if}
