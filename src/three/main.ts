import * as THREE from 'three';
import graphScene from './scenes/graph';
import drawLine from './util/drawLine';
import drawPoints from './util/drawPoint';

export const getRenderer = (elCanvas: HTMLCanvasElement) => {
  const {width, height} = elCanvas;
  const renderer = new THREE.WebGLRenderer({ canvas: elCanvas, alpha: true, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xAAAAAA); // 背景を透明にする

  const vertex: THREE.Vector3[] = [];
  const offset = 50;
  for (let i = 0; i <= offset; i ++) {
    vertex.push(new THREE.Vector3((width / offset * i) - (width / 2), (Math.random() * height) - (height / 2), 0));
  }
  const vertex2: THREE.Vector3[] = [];
  for (let i = 0; i <= offset; i ++) {
    vertex2.push(new THREE.Vector3((width / offset * i) - (width / 2), (Math.random() * height) - (height / 2), 0));
  }

  const objects = [
    drawLine(vertex, {color: 0x00FFFF}),
    ...vertex.map(vec3 => drawPoints(vec3, {color: 0x00FFFF})),
    drawLine(vertex2, {color: 0xFFFF00}),
    ...vertex2.map(vec3 => drawPoints(vec3, {color: 0xFFFF00})),
    // new THREE.AmbientLight(0xFFFFFF, 1.0),
  ];

  const scene = graphScene(objects);
  const camera = new THREE.OrthographicCamera(width / -2, width / 2, height / 2, height / -2, 1, 5000);
  camera.position.z = 500;
  camera.lookAt(objects[0].position);
  const loop = () => {
    window.requestAnimationFrame(loop);
    renderer.render(scene, camera);
  }
  
  window.requestAnimationFrame(loop);
  return objects;
};
