import { getDayNumber, getOblecl, getEccentricAnomalyInDeg } from './Utils'
import * as MathUtils from './MathUtils'
import { sun } from './OrbitalElementsData'

test('Getting DayNumber', () => {
  const date = new Date('1990-04-19T00:00:00')

  expect(getDayNumber(date)).toBe(-3543)
})

test('Getting obliquity of the ecliptic', () => {
  const dayNumber = -3543

  expect(Math.round(getOblecl(dayNumber) * 10000) / 10000).toBe(23.4406)
})

test('Getting Eccentric Anomaly in degrees', () => {
  const d = -3543
  const M = MathUtils.wrapTo360(sun.M.value + sun.M.variation * d)
  const e = sun.e.value + sun.e.variation * d
  const E = getEccentricAnomalyInDeg(M, e)
  expect(Math.round(M * 10000) / 10000).toBe(104.0653)
  expect(Math.round(e * 1000000) / 1000000).toBe(0.016713)
  expect(Math.round(E * 10000) / 10000).toBe(104.9904)
})
