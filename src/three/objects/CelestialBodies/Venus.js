import CelestialBody from './CelestialBody'

export default class Venus extends CelestialBody {
  color = '#fda700'

  _orbitalElements = {
    N: {
      value: 76.6799,
      variation: 2.4659e-5,
    },
    i: {
      value: 3.3946,
      variation: 2.75e-8,
    },
    w: {
      value: 54.891,
      variation: 1.38374e-5,
    },
    a: {
      value: 0.72333,
      variation: 0.0,
    },
    e: {
      value: 0.006773,
      variation: -1.302e-9,
    },
    M: {
      value: 48.0052,
      variation: 1.6021302244,
    },
  }
}
