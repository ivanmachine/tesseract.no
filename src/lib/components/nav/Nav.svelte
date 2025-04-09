<script lang="ts">
  import { _ } from "svelte-i18n";
  import LanguageSwitch from "./LanguageSwitch.svelte";
  import NavLink from "./NavLink.svelte";
</script>

<nav class="flex w-full justify-between items-center">
  <a class="title" href="/home">Tesseract</a>

  <div class="flex ml-auto gap-8 center links">
    <NavLink text={$_("nav_home")} href="/home" />
    <NavLink text={$_("nav_services")} href="/services" />
    <NavLink text={$_("nav_projects")} href="/projects" />
    <NavLink text={$_("nav_articles")} href="/articles" />
    <NavLink text={$_("nav_about")} href="/about-us" />
    <NavLink text={$_("nav_contact")} href="/contact" />
    <LanguageSwitch />
  </div>
</nav>

<style>
  nav {
    position: fixed;
    top: 0;
    padding: 1rem 2rem;
  }
  .title {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Orbitron", sans-serif;
  }
</style>
