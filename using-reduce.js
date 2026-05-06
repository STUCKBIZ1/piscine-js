function adder(arr){
    return arr.reduce((acc, curr) =>{
        return acc + curr
    }, 0)
}
function sumOrMul(arr, start){
    return arr.reduce((acc, currn) => {
    if (currn %  2== 0){
        return acc * currn
    }else{
        return acc + currn
    }
    }, start)
}
function funcExec(arr){
    return arr.reduce((acc, fn)=>{
        return fn(acc)
    }, 0)
}