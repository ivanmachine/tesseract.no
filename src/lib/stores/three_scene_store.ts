import { writable } from "svelte/store";

type ThreeScene = {
  camera: {
    position: [number, number, number];
    rotation: [number, number, number];
  };
};

export const threeSceneStore = writable<ThreeScene>({
  camera: {
    position: [0, 0, 10],
    rotation: [0, 0, 0],
  },
});
