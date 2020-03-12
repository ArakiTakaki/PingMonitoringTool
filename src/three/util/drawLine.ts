import * as THREE from 'three';
// 後で設定に切り出す

  
const drawLine = (
  line: Array<THREE.Vector3>,
  options?: {
    color: number;
  }
): THREE.Line => {
  const material = new THREE.LineBasicMaterial({
    linewidth: 100,
    color: options?.color || 0xFFFFFF,
    vertexColors: false,
  });
  const geometory = new THREE.BufferGeometry();
  geometory.setFromPoints(line);
  return new THREE.Line(geometory, material);
}

export default drawLine;