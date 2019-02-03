import * as THREE from 'three'

export default class Cube {
  constructor(scene) {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    this.mesh = new THREE.Mesh(geometry, material)
    scene.add(this.mesh)
  }

  update() {
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.01
  }
}
