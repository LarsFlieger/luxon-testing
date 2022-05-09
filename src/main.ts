import { DateTime } from "luxon";

// Add date
const dt = DateTime.fromJSDate(new Date(2022, 4, 15))
console.log(dt.toString())
const nextDay = dt.plus({ days: 1 })
console.log(nextDay.toString())

// Sort dates
const dates = [DateTime.utc(2022, 4, 15), DateTime.utc(2022, 4, 3), DateTime.utc(2022, 4, 20)]
console.log(dates.map(date => date.toString()))
dates.sort()
console.log(dates.map(date => date.toString()))