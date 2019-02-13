import CelestialBody from './CelestialBody'
import sunmap from '../../assets/img/sunmap.jpg'

export default class Earth extends CelestialBody {
  color = '#ffff00'
  map = sunmap

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
      value: 0.0,
      variation: 0.0,
    },
    a: {
      value: 0.0,
      variation: 0.0,
    },
    e: {
      value: 0.0,
      variation: 0.0,
    },
    M: {
      value: 0.0,
      variation: 0.0,
    },
  }
}
