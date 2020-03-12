import * as THREE from 'three';
const drawPoints = (point: THREE.Vector3, options?: {
  color: number;
}): THREE.Object3D => {
  // 後で設定に切り出す
  const geometry = new THREE.CircleBufferGeometry(5, 10);
  const material = new THREE.MeshBasicMaterial({ color: options?.color || 0xFFFFFF, });
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.x = point.x;
  mesh.position.y = point.y;
  mesh.position.z = point.z;

  return mesh;
}

export default drawPoints;