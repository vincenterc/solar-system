import * as MathUtils from './MathUtils'

// "day number" from 2000 Jan 0.0 TDT, which is the same as 1999 Dec 31.0 TDT
export function getDayNumber(date) {
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const D = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const UT = hours + (minutes + seconds / 60) / 60
  let d =
    367 * y -
    Math.floor((7 * (y + Math.floor((m + 9) / 12))) / 4) -
    Math.floor(
      (3 * (Math.floor((y + Math.floor((m - 9) / 7)) / 100) + 1)) / 4
    ) +
    Math.floor((275 * m) / 9) +
    D -
    730515

  return d + UT / 24
}

export function getOblecl(dayNumber) {
  return 23.4393 - 3.563e-7 * dayNumber
}

export function getEccentricAnomalyInDeg(M, e) {
  return MathUtils.wrapTo360(
    M + e * (180 / Math.PI) * MathUtils.sind(M) * (1.0 + e * MathUtils.cosd(M))
  )
}

export function getEccentricAnomaly(M, e) {
  const _calculateE0 = (M, e) =>
    MathUtils.wrapTo360(
      M +
        e * (180 / Math.PI) * MathUtils.sind(M) * (1.0 + e * MathUtils.cosd(M))
    )
  const _calculateE1 = (M, E0) =>
    E0 -
    (E0 - (180 / Math.PI) * e * MathUtils.sind(E0) - M) /
      (1 - e * MathUtils.cosd(E0))
  let E0 = _calculateE0(M, e)
  let E1 = _calculateE1(M, E0)

  while (Math.abs(E0 - E1) > 0.005) {
    E0 = E1
    E1 = _calculateE1(M, E0)
  }

  return E1
}

export function getTrueAnomaly(E, e) {
  const x = MathUtils.cosd(E) - e
  const y = Math.sqrt(1 - e * e) * MathUtils.sind(E)

  return MathUtils.atan2d(y, x)
}

export function getRadialDistance(E, e) {
  const x = MathUtils.cosd(E) - e
  const y = Math.sqrt(1 - e * e) * MathUtils.sind(E)

  return Math.sqrt(x * x + y * y)
}

export function getMeanLongitude(N, w, M) {
  return MathUtils.wrapTo360(N + w + M)
}

export function getTrueLongitude(N, w, v) {
  return MathUtils.wrapTo360(N + w + v)
}

export function getPosInEclRectCoord(r, longitude) {
  return {
    x: r * MathUtils.cosd(longitude),
    y: r * MathUtils.sind(longitude),
    z: 0,
  }
}

export function getPosInEquatRectCoord(xecl, yecl, zecl, oblecl) {
  return {
    x: xecl,
    y: yecl * MathUtils.cosd(oblecl) - zecl * MathUtils.sind(oblecl),
    z: yecl * MathUtils.sind(oblecl) + zecl * MathUtils.cosd(oblecl),
  }
}

export function getRightAscension(xequat, yequat) {
  return MathUtils.atan2d(yequat, xequat)
}

export function getDeclination(xequat, yequat, zequat) {
  return MathUtils.atan2d(zequat, Math.sqrt(xequat * xequat + yequat * yequat))
}

export function getsiderealTime(UT, longitude, L) {
  const GMST0 = MathUtils.wrapTo360(L + 180) / 15

  return GMST0 + UT + longitude / 15
}
