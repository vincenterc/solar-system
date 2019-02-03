import CelestialBody from './CelestialBody'

export default class Jupiter extends CelestialBody {
  color = '#ff9932'

  _orbitalElements = {
    N: {
      value: 100.4542,
      variation: 2.76854e-5,
    },
    i: {
      value: 1.303,
      variation: -1.557e-7,
    },
    w: {
      value: 273.8777,
      variation: 1.64505e-5,
    },
    a: {
      value: 5.20256,
      variation: 0.0,
    },
    e: {
      value: 0.048498,
      variation: 4.469e-9,
    },
    M: {
      value: 19.895,
      variation: 0.0830853001,
    },
  }
}
