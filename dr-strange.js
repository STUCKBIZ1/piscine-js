let week = [
    "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
"secondMonday", "secondTuesday", "secondWednesday", "secondThursday",
"secondFriday", "secondSaturday", "secondSunday"
]
const e = new Date("0001-01-01")

function addWeek(date){
   const diff = date.getTime() - e.getTime
   let days = Math.floor(diff/(1000 * 60 *  60 * 24))
   let day = days%14
return week[day]
}
function timeTravel({ date, hour, minute, second }) {
   date.setHours(hour);
   date.setMinutes(minute);
   date.setSeconds(second);
   return date
}
// console.log(timeTravel({
//   date: new Date("2020-05-29 23:25:22"),
//   hour: 21,
//   minute: 22,
//   second: 22,
// }).toString())

// addWeek(new Date("0001-01-01")); // Output: 'Monday'
// addWeek(new Date("0001-01-02")); // Output: 'Tuesday'
// addWeek(new Date("0001-01-07")); // Output: 'Sunday'
// addWeek(new Date("0001-01-08")); // Output: 'secondMonday'
// addWeek(new Date("0001-01-09")); // Output: 'secondTuesday'