function isValid(date){
    let time = date.getTime()
    if (Number.isNaN(time)){
        return false
    }
    return true
}
function isAfter(date1, date2){
    if (!isValid(date1) || !isValid(date2)){
        return false
    }
    let time1 = date1.getTime();
    let time2 = date2.getTime();
    return time1 > time2 
}
function isBefore(date1, date2){
    let time1 = date1.getTime();
    let time2 = date2.getTime();
    return time1 < time2;
}   
function isFuture(date){
    if(!isValid(date)){
        return false
    }
    let now = new Date();
    if (date.getTime() > now.getTime()){
        return true
    }
    return true
    
}
function isPast(date){
    if(!isValid(date)){
        return false
    }
    let now = new Date();
    if (date.getTime() < now.getTime()){
        return true
    }
    return true
    
}
// console.log(isBefore(new Date("2004-01-02"), new Date("2004-01-02")))