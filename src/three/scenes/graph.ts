import * as THREE from "three";

const graphScene = (objects: Array<THREE.Object3D>) => {
  const scene = new THREE.Scene();
  scene.add(...objects);
  return scene;
};

export default graphScene;
