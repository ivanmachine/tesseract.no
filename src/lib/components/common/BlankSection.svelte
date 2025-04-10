<script lang="ts">
  let { pages = 1 } = $props();
</script>

<section class="f-section" style="--pages: {pages}">
  <p>Pages: {pages}</p>
</section>

<style>
  .f-section {
    height: calc(var(--pages) * 100vh) !important;
  }
</style>
