import CelestialBody from './CelestialBody'

export default class Uranus extends CelestialBody {
  color = '#99ccff'

  _orbitalElements = {
    N: {
      value: 74.0005,
      variation: 1.3978e-5,
    },
    i: {
      value: 0.7733,
      variation: 1.9e-8,
    },
    w: {
      value: 96.6612,
      variation: 3.0565e-5,
    },
    a: {
      value: 19.18171,
      variation: -1.55e-8,
    },
    e: {
      value: 0.047318,
      variation: 7.45e-9,
    },
    M: {
      value: 142.5905,
      variation: 0.011725806,
    },
  }
}
