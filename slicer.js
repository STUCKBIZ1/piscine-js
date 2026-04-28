function slice(ars, start, end){
    let resr = [];
    let ress = "";
    if (start < 0){
        start += ars.length
    }
    if (end < 0){
        end += ars.length
    }
    if (end > ars.length-1){
        end = ars.length-1
    }
    for (let i = start; i <= end; i++){
        if(typeof ars === 'string'){
            ress += ars[i]
        }else{
            result.push(ars[i])
        }
    }
    if (typeof ars === 'string'){
        return ress
    }
    return result
}
// console.log(slice("dklkjsdghkjf", -5, 11))