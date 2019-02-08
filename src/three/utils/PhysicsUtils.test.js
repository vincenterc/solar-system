import {
  calculateDayNumber,
  getOblecl,
  calculateEccentricAnomalyInDeg,
  calculateTrueAnomalyInDeg,
  calculateRadialDistance,
  getTrueLongitude,
  getPosInEclRectCoord,
  calculatePosInEclRectCoord,
  getPosInEquatRectCoord,
  getRightAscension,
  getDeclination,
  getMeanLongitude,
  getsiderealTime,
  calculatePosInEclSphericalCoord,
  getPerturbationsInJupiterLong,
  getPerturbationsInSaturnLong,
  getPerturbationsInSaturnLat,
  getPerturbationsInUranusLong,
} from './PhysicsUtils'
import * as MathUtils from './MathUtils'

test('Calculate day number', () => {
  const date = new Date('1990-04-19T00:00:00')

  expect(calculateDayNumber(date)).toBe(-3543)
})

test('Getting obliquity of the ecliptic', () => {
  const dayNumber = -3543

  expect(MathUtils.round(getOblecl(dayNumber), 4)).toBe(23.4406)
})

test('Calculate eccentric anomaly in degrees', () => {
  const MOfSun = 104.0653
  const eOfSun = 0.016713
  const EOfSun = calculateEccentricAnomalyInDeg(MOfSun, eOfSun)
  const MOfMoon = 266.0954
  const eOfMoon = 0.0549
  const EOfMoon = calculateEccentricAnomalyInDeg(MOfMoon, eOfMoon)
  const MOfMercury = 69.5153
  const eOfMercury = 0.205633
  const EOfMercury = calculateEccentricAnomalyInDeg(MOfMercury, eOfMercury)

  expect(MathUtils.round(EOfSun, 4)).toBe(104.9904)
  expect(MathUtils.round(EOfMoon, 4)).toBe(262.9735)
  expect(MathUtils.round(EOfMercury, 4)).toBe(81.1572)
})

test('Calculate true anomaly in degrees', () => {
  const E = 104.9904
  const e = 0.016713

  expect(MathUtils.round(calculateTrueAnomalyInDeg(E, e), 4)).toBe(105.9134)
})

test('Calculate Radial distance', () => {
  const a = 1
  const E = 104.9904
  const e = 0.016713

  expect(MathUtils.round(calculateRadialDistance(a, E, e), 6)).toBe(1.004323)
})

test('Getting mean longitude', () => {
  const N = 0
  const w = 282.7735
  const M = 104.0653
  const L = MathUtils.round(getMeanLongitude(N, w, M), 4)

  expect(L).toBe(26.8388)
})

test('Getting true longitude', () => {
  const N = 0
  const w = 282.7735
  const M = 104.0653
  const e = 0.016713
  const E = calculateEccentricAnomalyInDeg(M, e)
  const v = MathUtils.round(calculateTrueAnomalyInDeg(E, e), 4)

  expect(N).toBe(0)
  expect(w).toBe(282.7735)
  expect(MathUtils.round(getTrueLongitude(N, w, v), 4)).toBe(28.6869)
})

test('Getting position in ecliptic rectangular coordinates', () => {
  const r = 1.004323
  const l = 28.6869
  const { x, y, z } = getPosInEclRectCoord(r, l)

  expect(MathUtils.round(x, 6)).toBe(0.881048)
  expect(MathUtils.round(y, 6)).toBe(0.482098)
  expect(z).toBe(0)
})

test('Calculate position in ecliptic rectangular coordinates', () => {
  const N = 48.2163
  const i = 7.0045
  const w = 29.0882
  const a = 0.387098
  const e = 0.205633
  const M = 69.5153
  const E = calculateEccentricAnomalyInDeg(M, e)
  const r = calculateRadialDistance(a, MathUtils.round(E, 4), e)
  const v = calculateTrueAnomalyInDeg(E, e)
  const { x, y, z } = calculatePosInEclRectCoord(N, i, w, r, v)

  expect(MathUtils.round(r, 6)).toBe(0.374862)
  expect(MathUtils.round(v, 4)).toBe(93.0727)
  expect(MathUtils.round(x, 6)).toBe(-0.367821)
  expect(MathUtils.round(y, 6)).toBe(0.061084)
  expect(MathUtils.round(z, 6)).toBe(0.038699)
})

test('Get position in ecliptic sherical coordinates', () => {
  const x = -0.367821
  const y = 0.061084
  const z = 0.038699
  const { r, long, lat } = calculatePosInEclSphericalCoord(x, y, z)

  expect(MathUtils.round(r, 6)).toBe(0.374862)
  expect(MathUtils.round(long, 4)).toBe(170.5709)
  expect(MathUtils.round(lat, 4)).toBe(5.9255)
})

test('Getting position in equatorial rectangular coordinates', () => {
  const xecl = 0.881048
  const yecl = 0.482098
  const zecl = 0
  const oblecl = 23.4406
  const { x, y, z } = getPosInEquatRectCoord(xecl, yecl, zecl, oblecl)

  expect(MathUtils.round(x, 6)).toBe(0.881048)
  expect(MathUtils.round(y, 6)).toBe(0.442312)
  expect(MathUtils.round(z, 6)).toBe(0.191778)
})

test('Getting right ascension', () => {
  const xequat = 0.881048
  const yequat = 0.442312
  const ra = getRightAscension(xequat, yequat)

  expect(MathUtils.round(ra, 4)).toBe(26.658)
})

test('Getting declination', () => {
  const xequat = 0.881048
  const yequat = 0.442312
  const zequat = 0.191778
  const dcel = getDeclination(xequat, yequat, zequat)

  expect(MathUtils.round(dcel, 4)).toBe(11.0084)
})

test('Getting sidereal time', () => {
  const UT = 0
  const longitude = 15
  const L = 26.8388
  const siderealTime = getsiderealTime(UT, longitude, L)

  expect(MathUtils.round(siderealTime, 5)).toBe(14.78925)
})

test("Get perturbations in jupiter's longitude", () => {
  const Mj = 85.5238
  const Ms = 198.4741
  const perturbations = getPerturbationsInJupiterLong(Mj, Ms)

  expect(MathUtils.round(perturbations, 4)).toBe(-0.012)
})

test("Get perturbations in saturn's longitude", () => {
  const Mj = 85.5238
  const Ms = 198.4741
  const perturbations = getPerturbationsInSaturnLong(Mj, Ms)

  expect(MathUtils.round(perturbations, 4)).toBe(-0.0699)
})

test("Get perturbations in saturn's latitude", () => {
  const Mj = 85.5238
  const Ms = 198.4741
  const perturbations = getPerturbationsInSaturnLat(Mj, Ms)

  expect(MathUtils.round(perturbations, 4)).toBe(0.0053)
})

test("Get perturbations in uranus' longtitude", () => {
  const Mj = 85.5238
  const Ms = 198.4741
  const Mu = 101.046
  const perturbations = getPerturbationsInUranusLong(Mj, Ms, Mu)

  expect(MathUtils.round(perturbations, 4)).toBe(-0.0327)
})
