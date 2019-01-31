import * as THREE from 'three'
import Cube from './Entities/Cube'

export default () => {
  const scene = _createScene()
  const renderer = _createRenderer()
  const camera = _createCamera()
  const entities = _createEntities(scene)

  function _createScene() {
    let scene = new THREE.Scene()

    return scene
  }

  function _createRenderer() {
    let renderer = new THREE.WebGLRenderer()
    renderer.setSize(window.innerWidth, window.innerHeight)

    return renderer
  }

  function _createCamera() {
    let camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 5

    return camera
  }

  function _createEntities(scene) {
    const entities = [new Cube(scene)]

    return entities
  }

  function update() {
    for (let entitie of entities) {
      entitie.update()
    }

    renderer.render(scene, camera)
  }

  return { renderer, update }
}
