import * as MathUtils from '../../utils/MathUtils'
import Earth from './Earth'
import Mercury from './Mercury'
import Venus from './Venus'
import Mars from './Mars'
import Jupiter from './Jupiter'
import Saturn from './Saturn'
import Uranus from './Uranus'
import Neptune from './Neptune'

const CelestialBodies = [
  {
    instance: new Earth(),
    testData: {
      N: 0.0,
      i: 0.0,
      w: 282.7735,
      a: 1.0,
      e: 0.016713,
      M: 104.0653,
    },
  },
  {
    instance: new Mercury(),
    testData: {
      N: 48.2163,
      i: 7.0045,
      w: 29.0882,
      a: 0.387098,
      e: 0.205633,
      M: 69.5153,
    },
  },
  {
    instance: new Venus(),
    testData: {
      N: 76.5925,
      i: 3.3945,
      w: 54.842,
      a: 0.72333,
      e: 0.006778,
      M: 131.6578,
    },
  },
  {
    instance: new Mars(),
    testData: {
      N: 49.4826,
      i: 1.8498,
      w: 286.3978,
      a: 1.523688,
      e: 0.093396,
      M: 321.9965,
    },
  },
  {
    instance: new Jupiter(),
    testData: {
      N: 100.3561,
      i: 1.3036,
      w: 273.8194,
      a: 5.20256,
      e: 0.048482,
      M: 85.5238,
    },
  },
  {
    instance: new Saturn(),
    testData: {
      N: 113.5787,
      i: 2.489,
      w: 339.2884,
      a: 9.55475,
      e: 0.05558,
      M: 198.4741,
    },
  },
  {
    instance: new Uranus(),
    testData: {
      N: 73.951,
      i: 0.7732,
      w: 96.5529,
      a: 19.18176,
      e: 0.047292,
      M: 101.046,
    },
  },
  {
    instance: new Neptune(),
    testData: {
      N: 131.6737,
      i: 1.7709,
      w: 272.8675,
      a: 30.05814,
      e: 0.008598,
      M: 239.0063,
    },
  },
]

test('Test orbital elements of celestial bodies.', () => {
  const dayNumber = -3543

  CelestialBodies.forEach(cb => {
    const instance = cb.instance
    instance.setOrbitalElements(dayNumber)
    const orbitalElements = instance.orbitalElements

    Object.keys(cb.testData).forEach(key => {
      const testDatum = cb.testData[key]
      const numOfDomicials = MathUtils.countDomicials(testDatum)
      let value = 0

      if (new Set(['N', 'i', 'w', 'M']).has(key)) {
        value = MathUtils.wrapTo360(orbitalElements[key])
      } else {
        value = orbitalElements[key]
      }

      expect(MathUtils.round(value, numOfDomicials)).toBe(testDatum)
    })
  })
})
