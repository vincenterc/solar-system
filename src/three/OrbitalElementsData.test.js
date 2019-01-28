import {
  mercury,
  venus,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
} from './OrbitalElementsData'
import * as MathUtils from './MathUtils'

const PLANETS = [
  {
    key: 'mercury',
    value: mercury,
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
    key: 'venus',
    value: venus,
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
    key: 'mars',
    value: mars,
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
    key: 'jupiter',
    value: jupiter,
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
    key: 'saturn',
    value: saturn,
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
    key: 'uranus',
    value: uranus,
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
    key: 'neptune',
    value: neptune,
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

test('Orbital elements of planets', () => {
  const d = -3543

  PLANETS.forEach(p => {
    Object.keys(p.testData).forEach(key => {
      const testData = p.testData[key]
      const numOfDomicials = MathUtils.countDomicials(testData)

      if (new Set(['N', 'i', 'w', 'M']).has(key)) {
        key = MathUtils.wrapTo360(
          p.value[key].value + p.value[key].variation * d
        )
      } else {
        key = p.value[key].value + p.value[key].variation * d
      }
      expect(MathUtils.round(key, numOfDomicials)).toBe(testData)
    })
  })
})
