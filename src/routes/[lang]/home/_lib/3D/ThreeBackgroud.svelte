<script>
  import { Canvas } from "@threlte/core";
  import Scene from "./Scene.svelte";
</script>

<div class="three-scene-wrapper">
  <Canvas>
    <Scene />
  </Canvas>
</div>

<style>
  .three-scene-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
</style>
