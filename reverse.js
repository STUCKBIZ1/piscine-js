function reverse(ars){
    let arr = [];
    for (let i = ars.length-1; i >= 0; i--){
        arr.push(ars[i])
    }
    return arr
}
// console.log(reverse([]))