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
      long: 28.687,
      r: 1.004323,
    },
  },
  {
    instance: new Mercury(),
    testData: {
      long: 170.5709,
      lat: 5.9255,
      r: 0.374861,
    },
  },
  {
    instance: new Venus(),
    testData: {
      long: 263.657,
      lat: 359.582,
      r: 0.726607,
    },
  },
  {
    instance: new Mars(),
    testData: {
      long: 290.6296,
      lat: 358.3797,
      r: 1.417194,
    },
  },
  {
    instance: new Jupiter(),
    testData: {
      long: 105.2576, //105.2543
      lat: 0.1114,
      r: 5.19509,
    },
  },
  {
    instance: new Saturn(),
    testData: {
      long: 289.4524,
      lat: 0.1792,
      r: 10.06118,
    },
  },
  {
    instance: new Uranus(),
    testData: {
      long: 276.8024, //276.7999
      lat: 359.6997,
      r: 19.39632, //19.39628
    },
  },
  {
    instance: new Neptune(),
    testData: {
      long: 282.7191,
      lat: 0.8575,
      r: 30.19285,
    },
  },
]

test('Test position in spherical coordinates.', () => {
  const dayNumber = -3543

  CelestialBodies.forEach(cb => {
    const instance = cb.instance
    instance.setOrbitalElements(dayNumber)
    instance.setPositionInRectCoord()
    instance.setPositionInSpericalCoord()
    const position = {
      r: instance.radialDistance,
      long: instance.longitude,
      lat: instance.latitude,
    }

    Object.keys(cb.testData).forEach(key => {
      const testDatum = cb.testData[key]
      const numOfDomicials = MathUtils.countDomicials(testDatum)

      expect(MathUtils.round(position[key], numOfDomicials)).toBe(testDatum)
    })
  })
})
