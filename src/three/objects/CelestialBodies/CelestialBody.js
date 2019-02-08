import {
  calculateEccentricAnomalyInDeg,
  calculateTrueAnomalyInDeg,
  calculateRadialDistance,
  calculatePosInEclRectCoord,
  calculatePosInEclSphericalCoord,
} from '../../utils/PhysicsUtils'

export default class CelestialBody {
  setOrbitalElements(dayNumber) {
    this.orbitalElements = ['N', 'i', 'w', 'a', 'e', 'M'].reduce(
      (acc, cv) => ({
        ...acc,
        [cv]:
          this._orbitalElements[cv].value +
          this._orbitalElements[cv].variation * dayNumber,
      }),
      {}
    )
  }

  setPositionInRectCoord() {
    const E = calculateEccentricAnomalyInDeg(
      this.orbitalElements.M,
      this.orbitalElements.e
    )
    const v = calculateTrueAnomalyInDeg(E, this.orbitalElements.e)
    const r = calculateRadialDistance(
      this.orbitalElements.a,
      E,
      this.orbitalElements.e
    )
    this.position = calculatePosInEclRectCoord(
      this.orbitalElements.N,
      this.orbitalElements.i,
      this.orbitalElements.w,
      r,
      v
    )
  }

  setPositionInSpericalCoord() {
    ;({
      r: this.radialDistance,
      long: this.longitude,
      lat: this.latitude,
    } = calculatePosInEclSphericalCoord(
      this.position.x,
      this.position.y,
      this.position.z
    ))
  }
}
