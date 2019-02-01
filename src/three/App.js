import * as THREE from 'three'
import Cube from './Objects/Cube'
import OrbitControls from './Utils/OrbitControls'

export default canvas => {
  const scene = _createScene()
  const renderer = _createRenderer()
  const camera = _createCamera()
  const objects = _createObjects()
  const orbitControls = new OrbitControls(camera, renderer.domElement)

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

  function _createObjects() {
    const objects = [new Cube(scene)]

    return objects
  }

  function update() {
    for (let object of objects) {
      object.update()
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
