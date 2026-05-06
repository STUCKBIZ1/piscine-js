function isFriday(date){
    if (!date instanceof Date){
        return false
    }
    if (date.getDay() === 5){
        return true
    }
    return false
}
function isWeekend(date){
    if (!(date instanceof Date)) {
        return false
    }
    return date.getDay() === 6 || date.getDay() === 0;
}
function isLeapYear(date){
     if (!(date instanceof Date)) {
        return false
    }
    let year = date.getFullYear()
    // console.log(new Date(year, 2, 0).getDate())
    return new Date(year, 2, 0).getDate() === 29
}
function isLastDayOfMonth(date){
    if (!(date instanceof Date)) {
        return false
    }
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()
    return new Date(year, month+1, 0).getDate() === day
}
//  console.log(isLastDayOfMonth(new Date(2000, 1, 29)))