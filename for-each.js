function forEach(arr, fn){
    for (let i = 0; i < arr.length; i++){
        fn(arr[i], i, arr)
    }
}
forEach([1,2, 3,4], console.log)