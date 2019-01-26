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
