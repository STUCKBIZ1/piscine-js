function reverse(ars){
    let arr = (typeof ars ==='string')? "": [];
    for (let i = ars.length-1; i >= 0; i--){
        if (typeof ars === 'string'){
            arr += ars[i]
        }else{
        arr.push(ars[i])
            
        }
    }
    return arr
}
console.log(reverse([]))