<script lang="ts">
  import { animate, onScroll, utils } from "animejs";
  let rectEl: HTMLDivElement | null = null;

  $effect(() => {
    const [target] = utils.$("#first-cards-component");

    if (!rectEl) return;
    const animation = animate(rectEl, {
      autoplay: onScroll({
        target,
        debug: true,
        onEnter: () => {
          // Play forward
          animation.play();
        },
        onLeave: () => {
          // Play in reverse
          animation.reverse();
        },
      }),
      opacity: [0, 1],
    });
  });
</script>

<div bind:this={rectEl} class="rect"></div>

<style>
  .rect {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    clip-path: polygon(0 0, 100% 100%, 0 100%);
    background: rgb(2, 0, 36);
    background: linear-gradient(
      45deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    opacity: 0;
  }
</style>
