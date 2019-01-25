import { getDayNumber, getOblecl } from './Utils'

test('Getting DayNumber', () => {
  const date = new Date('1990-04-19T00:00:00')

  expect(getDayNumber(date)).toBe(-3543)
})

test('Getting obliquity of the ecliptic', () => {
  const dayNumber = -3543

  expect(Math.round(getOblecl(dayNumber) * 10000) / 10000).toBe(23.4406)
})
