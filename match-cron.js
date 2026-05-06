function matchCron(str, date){
    let minute = date.getMinutes();
    let hour = date.getHours();
    let dayofmonth = date.getDate();
    let month = date.getMonth()+1;
    let day = date.getDay()
    day = day === 0? 7 : day;
    let values = [minute, hour, dayofmonth, month, day]
    let parts = str.split(' ');
    for (let i = 0; i < 5; i++){ 
        if (parts[i] !== "*" && Number(parts[i]) !== values[i]){
            return false
        }
    }
    return true
}
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:02:00')))