<script lang="ts">
  import Transition from "$lib/components/animation/Transition.svelte";
  import BlankSection from "$lib/components/common/BlankSection.svelte";
  import Cards from "./_lib/Cards.svelte";
  import Hero from "./_lib/Hero.svelte";
</script>

<main class="flex flex-col center">
  <Hero />
  <Transition />
  <BlankSection />
  <Cards />
</main>
