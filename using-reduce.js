function adder(arr, start=0){
    return arr.reduce((acc, curr) => acc + curr, start)
}
function sumOrMul(arr, start=0){
    return arr.reduce((acc, currn) => {
    if (currn %  2== 0){
        return acc * currn
    }else{
        return acc + currn
    }
    }, start)
}
function funcExec(arr, start = 0){
    return arr.reduce((acc, fn)=>{
        return fn(acc)
    }, start)
}
console.log(adder([9, 24, 7, 1, 3], 10), 3)