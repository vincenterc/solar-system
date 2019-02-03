import CelestialBody from './CelestialBody'

export default class Earth extends CelestialBody {
  color = '#1F7CDA'

  _orbitalElements = {
    N: {
      value: 0.0,
      variation: 0.0,
    },
    i: {
      value: 0.0,
      variation: 0.0,
    },
    w: {
      value: 282.9404,
      variation: 4.70935e-5,
    },
    a: {
      value: 1.0,
      variation: 0.0,
    },
    e: {
      value: 0.016709,
      variation: -1.151e-9,
    },
    M: {
      value: 356.047,
      variation: 0.9856002585,
    },
  }
}
