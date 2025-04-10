<script lang="ts">
  import { Canvas, T } from "@threlte/core";
  import { OrbitControls } from "@threlte/extras";
  import { Environment } from "@threlte/extras";
  import { threeSceneStore } from "$lib/stores/three_scene_store";
  import { onDestroy } from "svelte";

  let scale = 1;
  let rotation = [0, 45, 0];

  const handleScroll = (event: Event) => {
    const scrollY = window.scrollY;
    scale = 1 + scrollY * 0.001; // Adjust the scaling factor as needed
    rotation[1] = 45 + scrollY * 0.0034; // Adjust the rotation factor as needed
    rotation[2] = scrollY * 0.001; // Adjust the rotation factor as needed
  };

  window.addEventListener("scroll", handleScroll);

  onDestroy(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<T.PerspectiveCamera
  makeDefault
  position={$threeSceneStore.camera.position}
  rotation={$threeSceneStore.camera.rotation}
  fov={15}
></T.PerspectiveCamera>
<Environment url="/3D/ocean_1k.exr" isBackground={false} />

<T.Mesh scale={[scale, scale, scale]} {rotation} position={[0, -0.5, 0]}>
  <T.BoxGeometry args={[0.5, 0.5, 0.5]} />
  <T.MeshBasicMaterial color="blue" />
</T.Mesh>
