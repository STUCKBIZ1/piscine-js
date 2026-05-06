const dyas = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function sunnySunday(date){
    let day = date.getDay()
    if (day === 0) day = d
    return dyas[day-1]
}
//    console.log(sunnySunday(new Date('0001-01-01')))