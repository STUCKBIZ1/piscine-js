function sameAmount(str, r, r1){
    r = new RegExp(r.source, r.flags + 'g')
    r1 = new RegExp(r1.source, r1.flags + 'g')  
    const count1 = (str.match(r) || []).length
    const count2 = (str.match(r1) || []).length
    return count1 === count2
}
// console.log(sameAmount("abdelalisdfassaa", "a", "asddfa<ss"))