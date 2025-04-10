<script lang="ts">
  import { animate, onScroll } from "animejs";
  let wrapperEl: HTMLDivElement | null = null;

  $effect(() => {
    if (!wrapperEl) return;
    animate(".text", {
      y: -800,
      duration: 2000,

      easing: "easeOut",
      autoplay: onScroll({
        container: document.body,
        target: wrapperEl,
        enter: "-200",
        sync: true,
      }),
    });
  });
</script>

<div class="hero f-section" bind:this={wrapperEl}>
  <div class="text">
    <h1>FOUR DIMENTIONAL INNOVATION</h1>
  </div>
</div>

<style>
  .f-section {
    justify-content: start;
  }
  .text {
    max-width: 1200px;
    text-align: center;
    height: fit-content;
    margin-top: 15rem;
  }
</style>
