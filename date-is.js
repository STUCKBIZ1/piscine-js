function isValid(date){
     if (typeof date === "number") {
        return !Number.isNaN(date);
    }
    if (!(date instanceof Date)){
        return false
    }
    return !Number.isNaN(date.getTime())
}
function isAfter(date1, date2){
    if (!isValid(date1) || !isValid(date2)){
        return false
    }
    let time1 = ToTime(date1)
    let time2 = ToTime(date2)
    return time1 > time2 
}
function isBefore(date1, date2){
    if (!isValid(date1) || !isValid(date2)){
        return false
    }
    let time1 = ToTime(date1)
    let time2 = ToTime(date2)
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
    return false
    
}
function isPast(date){
    if(!isValid(date)){
        return false
    }
    let now = new Date();
    if (date.getTime() < now.getTime()){
        return true
    }
    return false
    
}
function ToTime(date){
    if (date instanceof Date){
        return date.getTime()
    }else if (typeof date === "number"){
        return date
    }
}
// console.log(isBefore(new Date("2004-01-02"), new Date("2004-01-02")))