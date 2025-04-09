<script lang="ts">
  import "../app.css";
  import "$lib/i18n/i18n"; // Import to initialize
  import { locale } from "svelte-i18n";
  import Nav from "../lib/components/nav/Nav.svelte";

  let { children } = $props();
</script>

{#if $locale}
  <Nav />
  {@render children()}
{:else}
  Loading language...
{/if}
