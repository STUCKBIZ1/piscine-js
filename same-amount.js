function sameAmount(str, r, r1){
    const count1 = (str.match(r) || []).length
    const count2 = (str.match(r1) || []).length
    return count1 === count2
}
// console.log(sameAmount("abdelalisdfassaa", "a", "asddfa<ss"))