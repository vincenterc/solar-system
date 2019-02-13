import * as THREE from 'three'
import CelestialBodies from './objects/CelestialBodies'
import OrbitControls from './utils/OrbitControls'
import * as PhysicsUtils from './utils/PhysicsUtils'

export default class App {
  constructor(canvas) {
    const now = new Date()
    this.canvas = canvas
    this.scene = this._createScene()
    this.renderer = this._createRenderer()
    this.camera = this._createCamera()
    this.dayNumber = PhysicsUtils.calculateDayNumber(now)
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
    camera.position.z = 100

    return camera
  }

  _createObjects() {
    const celestialBodies = CelestialBodies.map(CB => {
      const cb = new CB()
      cb.init(this.scene, this.dayNumber)
      return cb
    })
    const objects = [...celestialBodies]

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
