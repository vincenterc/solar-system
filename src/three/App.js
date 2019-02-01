import * as THREE from 'three'
import Cube from './Entities/Cube'

export default canvas => {
  const scene = _createScene()
  const renderer = _createRenderer()
  const camera = _createCamera()
  const entities = _createEntities()

  function _createScene() {
    let scene = new THREE.Scene()

    return scene
  }

  function _createRenderer() {
    let renderer = new THREE.WebGLRenderer({ canvas })
    renderer.setSize(canvas.width, canvas.height)

    return renderer
  }

  function _createCamera() {
    let camera = new THREE.PerspectiveCamera(
      75,
      canvas.width / canvas.height,
      0.1,
      1000
    )
    camera.position.z = 5

    return camera
  }

  function _createEntities() {
    const entities = [new Cube(scene)]

    return entities
  }

  function update() {
    for (let entitie of entities) {
      entitie.update()
    }

    renderer.render(scene, camera)
  }

  function resizeScene() {
    renderer.setSize(canvas.width, canvas.height)
    camera.aspect = canvas.width / canvas.height
    camera.updateProjectionMatrix()
  }

  return { update, resizeScene }
}
