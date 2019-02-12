import * as THREE from 'three'
import Sun from './Sun'
import Earth from './Earth'
import Mercury from './Mercury'
import Venus from './Venus'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'
import Uranus from './Uranus'
import Neptune from './Neptune'

const CelestialBodies = [
  Sun,
  Earth,
  Mercury,
  Venus,
  Mars,
  Jupiter,
  Saturn,
  Uranus,
  Neptune,
]

export default CelestialBodies.map(
  CB =>
    class CelestialBody {
      constructor(scene, dayNumber) {
        this.celestialBody = new CB()
        this.celestialBody.setOrbitalElements(dayNumber)
        this.celestialBody.setPositionInRectCoord()
        const geometry = new THREE.SphereGeometry(1, 32, 32)
        const material = new THREE.MeshBasicMaterial({
          color: this.celestialBody.color,
        })
        this.mesh = new THREE.Mesh(geometry, material)

        this.mesh.position.x = this.celestialBody.position.x
        this.mesh.position.y = this.celestialBody.position.y
        this.mesh.position.z = this.celestialBody.position.z

        scene.add(this.mesh)
      }

      update() {}
    }
)
