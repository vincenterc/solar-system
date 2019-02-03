import * as THREE from 'three'
import Cube from './objects/Cube'
import OrbitControls from './utils/OrbitControls'

export default class App {
  constructor(canvas) {
    this.canvas = canvas
    this.scene = this._createScene()
    this.renderer = this._createRenderer()
    this.camera = this._createCamera()
    this.objects = this._createObjects()
    this.orbitControls = new OrbitControls(
      this.camera,
      this.renderer.domElement
    )
  }

  _createScene() {
    const scene = new THREE.Scene()

    return scene
  }

  _createRenderer() {
    const renderer = new THREE.WebGLRenderer({ canvas: this.canvas })
    renderer.setSize(this.canvas.width, this.canvas.height)

    return renderer
  }

  _createCamera() {
    const camera = new THREE.PerspectiveCamera(
      75,
      this.canvas.width / this.canvas.height,
      0.1,
      1000
    )
    camera.position.z = 5

    return camera
  }

  _createObjects() {
    const objects = [new Cube(this.scene)]

    return objects
  }

  update() {
    for (let object of this.objects) {
      object.update()
    }

    this.renderer.render(this.scene, this.camera)
  }

  resizeScene() {
    this.renderer.setSize(this.canvas.width, this.canvas.height)
    this.camera.aspect = this.canvas.width / this.canvas.height
    this.camera.updateProjectionMatrix()
  }
}
