// "day number" from 2000 Jan 0.0 TDT, which is the same as 1999 Dec 31.0 TDT
// d for 19 april 1990, at 0:00 UT: -3543
// const date = new Date('1990-04-19T00:00:00')
// console.log('dayNumber: ', getDayNumber(date))

function getDayNumber(date) {
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

function getOblecl(dayNumber) {
  return 23.4393 - 3.563e-7 * dayNumber
}
