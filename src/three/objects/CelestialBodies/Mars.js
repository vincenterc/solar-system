import CelestialBody from './CelestialBody'

export default class Mars extends CelestialBody {
  color = '#ff3300'

  _orbitalElements = {
    N: {
      value: 49.5574,
      variation: 2.11081e-5,
    },
    i: {
      value: 1.8497,
      variation: -1.78e-8,
    },
    w: {
      value: 286.5016,
      variation: 2.92961e-5,
    },
    a: {
      value: 1.523688,
      variation: 0.0,
    },
    e: {
      value: 0.093405,
      variation: 2.516e-9,
    },
    M: {
      value: 18.6021,
      variation: 0.5240207766,
    },
  }
}
