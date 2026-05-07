function map(arr, fn){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(fn(arr[i], i, arr))
    }
    return result                           
}
console.log(map([1,2,3 ,4,5,4], String))
function flatMap(arr, fn){
    let result = [];
    for (let i = 0; i < arr.length; i++){
        let res = fn(arr[i], i, arr)
        if (Array.isArray(res)){
            for (let j = 0; j < res.length; j++){
            result.push(res[j])
            }
        }else{
            result.push(res)
        }
    }
    return result
}
console.log(flatMap([[[[4], 994]]], String))
