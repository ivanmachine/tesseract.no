<script lang="ts">
  import { _ } from "svelte-i18n";
  import LanguageSwitch from "./LanguageSwitch.svelte";
</script>

<nav class="flex w-full justify-between items-center">
  <a href="/">{$_("site_title")}</a>

  <div class="flex ml-auto gap-4">
    <a href="/services">services</a>
    <a href="/projects">projects</a>
    <a href="/about-us">about</a>
    <a href="/articles">articles</a>
    <a href="/contact">contact</a>
    <LanguageSwitch />
  </div>
</nav>

<style>
  nav {
    padding: 1rem 2rem;
  }
</style>
