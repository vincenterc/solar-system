import CelestialBody from './CelestialBody'

export default class Saturn extends CelestialBody {
  color = '#ffcc99'

  _orbitalElements = {
    N: {
      value: 113.6634,
      variation: 2.3898e-5,
    },
    i: {
      value: 2.4886,
      variation: -1.081e-7,
    },
    w: {
      value: 339.3939,
      variation: 2.97661e-5,
    },
    a: {
      value: 9.55475,
      variation: 0.0,
    },
    e: {
      value: 0.055546,
      variation: -9.499e-9,
    },
    M: {
      value: 316.967,
      variation: 0.0334442282,
    },
  }
}
