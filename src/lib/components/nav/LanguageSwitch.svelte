<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import type { Locales } from "$lib/CONSTANTS";
  import { locale } from "svelte-i18n";
  function onLanguageChange() {}
</script>

<div class="wrapper flex center">
  <img src="/icons/globe_dark.svg" alt="globe" />
  <select
    name="language"
    bind:value={$locale}
    id="language"
    on:change={onLanguageChange}
  >
    <option value="en">English</option>
    <option value="no">Norwegian</option>
  </select>
  <img class="chevron" src="/icons/chevron_down_dark.svg" alt="chevron down" />
</div>

<style>
  .wrapper {
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    gap: 0.5rem;
  }
  .wrapper,
  select {
    background-color: var(--text);
    color: var(--bg);
  }
  select {
    border: none;
  }
  .chevron {
    height: 0.5rem;
  }
</style>
