import CelestialBody from './CelestialBody'

export default class Neptune extends CelestialBody {
  color = '#3299ff'

  _orbitalElements = {
    N: {
      value: 131.7806,
      variation: 3.0173e-5,
    },
    i: {
      value: 1.77,
      variation: -2.55e-7,
    },
    w: {
      value: 272.8461,
      variation: -6.027e-6,
    },
    a: {
      value: 30.05826,
      variation: 3.313e-8,
    },
    e: {
      value: 0.008606,
      variation: 2.15e-9,
    },
    M: {
      value: 260.2471,
      variation: 0.005995147,
    },
  }
}
