<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import type { Locales } from "$lib/CONSTANTS";
  import { locale } from "svelte-i18n";
  function onLanguageChange() {}
</script>

<select
  name="language"
  bind:value={$locale}
  id="language"
  on:change={onLanguageChange}
>
  <option value="en">English</option>
  <option value="no">Norwegian</option>
</select>
