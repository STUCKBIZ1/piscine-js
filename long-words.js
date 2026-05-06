function longWords(arr){
    return arr.every((currnt)=>{
        return currnt.length >= 5
    })
}
function oneLongWord(arr){
    return arr.some((carr)=>{
        return carr.length >= 10
    })
}
function noLongWords(arr){
       return arr.every((currnt)=>{
        return currnt.length < 7
    })
}
