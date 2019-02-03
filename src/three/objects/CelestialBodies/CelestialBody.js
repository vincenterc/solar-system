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
}
