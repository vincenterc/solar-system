import {
  getDayNumber,
  getOblecl,
  getEccentricAnomalyInDeg,
  getTrueAnomaly,
} from './Utils'
import * as MathUtils from './MathUtils'
import { sun } from './OrbitalElementsData'

test('Getting day number', () => {
  const date = new Date('1990-04-19T00:00:00')

  expect(getDayNumber(date)).toBe(-3543)
})

test('Getting obliquity of the ecliptic', () => {
  const dayNumber = -3543

  expect(MathUtils.round(getOblecl(dayNumber), 4)).toBe(23.4406)
})

test('Getting eccentric anomaly in degrees', () => {
  const d = -3543
  const M = MathUtils.wrapTo360(sun.M.value + sun.M.variation * d)
  const e = sun.e.value + sun.e.variation * d
  const E = getEccentricAnomalyInDeg(M, e)

  expect(MathUtils.round(M, 4)).toBe(104.0653)
  expect(MathUtils.round(e, 6)).toBe(0.016713)
  expect(MathUtils.round(E, 4)).toBe(104.9904)
})

test('Getting true anomaly in degrees', () => {
  const E = 104.9904
  const e = 0.016713

  expect(MathUtils.round(getTrueAnomaly(E, e), 4)).toBe(105.9134)
})
