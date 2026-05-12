function flat(arr, deepnum = 1){
    let newarr = [];
    for (let i = 0; i < arr.length; i++){
        if (Array.isArray(arr[i]) && deepnum > 0){
            newarr.push(...flat(arr[i], deepnum-1))
        }else{
            newarr.push(arr[i])
        }
    }
    return newarr
}
console.log(flat([1, 2, 43, 5, [7, 56 ,7, [3, 5, 9, [7, 99, 100, [2343, 5455, 66]]]]], 3))
