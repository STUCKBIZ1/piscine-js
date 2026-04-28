function indexOf(arr, valeu){
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] === valeu){
            return i
        }
    }
    return -1
}
function lastIndexOf(arr , valeu){
    for (let i = arr.length-1; i >= 0; i--){
        if (arr[i] === valeu){
            return i
        }
    }
    return -1
}
function includes(arr, valeu){
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] === valeu){
            return true
        }
    }
    return false
}