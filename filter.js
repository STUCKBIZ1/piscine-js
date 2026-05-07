function filter(arr, fn){
    let result = [];
    for (let i=0; i < arr.length; i++){
        if (fn(arr[i], i, arr)){
            result.push(arr[i])
        }
    }
    return result
}
function reject(arr, fn){
 let result = [];

     for (let i=0; i < arr.length; i++){
        if (!fn(arr[i], i, arr)){
            result.push(arr[i])
        }
    }
    return result
}
function partition(arr, fn){
    let result = [];
    let r1 = [], r2 = [];
    for (let i=0; i < arr.length; i++){
        if (fn(arr[i], i, arr)){
            r1.push(arr[i])
        }else{
            r2.push(arr[i])
        }
    }
    result.push(r1)
    result.push(r2)
    return result
}
function iszero(n){
    if (n== 0){
        return true
    }
    return false
}
console.log(partition([1,2,3,4,0, 0], iszero))