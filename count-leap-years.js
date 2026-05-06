function countLeapYears(date){
    let count = 0;
    let lastyear = date.getFullYear();
    for (let i = 1; i < lastyear; i++){
        if (isLeapYear(new Date(i, 0, 1))){
            count++
        }
    }
    return count
}
function isLeapYear(date){
     if (!(date instanceof Date)) {
        return false
    }
    let year = date.getFullYear()
    // console.log(new Date(year, 2, 0).getDate())
    return new Date(year, 2, 0).getDate() === 29
}
// console.log( countLeapYears(new Date("1664-08-09")))