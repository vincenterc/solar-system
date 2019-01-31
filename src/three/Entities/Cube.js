import * as THREE from 'three'

export default scene => {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const mesh = new THREE.Mesh(geometry, material)
  scene.add(mesh)

  function update() {
    mesh.rotation.x += 0.01
    mesh.rotation.y += 0.01
  }

  return { update }
}
