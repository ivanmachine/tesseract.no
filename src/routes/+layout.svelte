<script lang="ts">
  import "../app.css";
  import "../lib/css/global.css";
  import "../lib/css/utils.css";
  import "../lib/css/typography.css";
  import "$lib/i18n/i18n"; // Import to initialize
  import { locale } from "svelte-i18n";
  import Nav from "../lib/components/nav/Nav.svelte";
  import Background from "../lib/components/nav/Background.svelte";

  let { children } = $props();
</script>

{#if $locale}
  <Nav />
  <Background />
  {@render children()}
{:else}
  Loading language...
{/if}
