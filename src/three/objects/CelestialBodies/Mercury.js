import CelestialBody from './CelestialBody'

export default class Mercury extends CelestialBody {
  color = '#588a7b'

  _orbitalElements = {
    N: {
      value: 48.3313,
      variation: 3.24587e-5,
    },
    i: {
      value: 7.0047,
      variation: 5.0e-8,
    },
    w: {
      value: 29.1241,
      variation: 1.01444e-5,
    },
    a: {
      value: 0.387098,
      variation: 0.0,
    },
    e: {
      value: 0.205635,
      variation: 5.59e-10,
    },
    M: {
      value: 168.6562,
      variation: 4.0923344368,
    },
  }
}
