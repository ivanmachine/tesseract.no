<script lang="ts">
  import { _ } from "svelte-i18n";
  import LanguageSwitch from "./LanguageSwitch.svelte";
  import NavLink from "./NavLink.svelte";
  $: isOpen = false;
  $: innerWidth = 0;
</script>

<nav
  class="fixed top-0 flex justify-between items-end lg:items-center flex-col lg:flex-row right-0 h-full lg:h-fit w-min lg:w-full bg-blue-500 lg:bg-transparent"
>
  <a class="title" href="/home">Tesseract</a>

  <div
    class="flex ml-auto gap-8 links flex-col lg:flex-row items-end lg:items-center"
  >
    <NavLink text={$_("nav_home")} href="/home" />
    <NavLink text={$_("nav_services")} href="/services" />
    <NavLink text={$_("nav_projects")} href="/projects" />
    <NavLink text={$_("nav_articles")} href="/articles" />
    <NavLink text={$_("nav_about")} href="/about-us" />
    <NavLink text={$_("nav_contact")} href="/contact" />
  </div>
  <LanguageSwitch />
</nav>

<style>
  nav {
    padding: 1rem 2rem;
    z-index: 100;
  }
  .title {
    font-size: 2rem;
    font-weight: 700;
    font-family: "Orbitron", sans-serif;
  }
</style>
