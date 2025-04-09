<script lang="ts">
  import { _ } from "svelte-i18n";
  import LanguageSwitch from "./LanguageSwitch.svelte";
</script>

<nav class="flex w-full justify-between items-center">
  <a class="title" href="/home">Tesseract</a>

  <div class="flex ml-auto gap-8 center links">
    <a href="/home">{$_("nav_home")}</a>
    <a href="/services">{$_("nav_services")}</a>
    <a href="/projects">{$_("nav_projects")}</a>
    <a href="/about-us">{$_("nav_about")}</a>
    <a href="/articles">{$_("nav_articles")}</a>
    <a href="/contact">{$_("nav_contact")}</a>
    <LanguageSwitch />
  </div>
</nav>

<style>
  nav {
    padding: 1rem 2rem;
  }
  .links > a:hover {
    text-decoration: underline;
  }

  .title {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Orbitron", sans-serif;
  }
</style>
