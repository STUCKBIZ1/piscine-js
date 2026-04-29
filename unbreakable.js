function split(str, sep){
    let arr = [];
    let minres = "";
    for (let i = 0; i < str.length; i++){
        if (str[i] === sep){
            arr.push(minres)
            minres = ""
        }else{
          minres += str[i]  
        }
    }
    return arr
}
function join(arr, sep){
    let result = ""; 
    for (let i = 0; i < arr.length; i++){
        result += arr[i]
        if (i != arr.length-1){
            result += sep
        }
    }
    return result
}
// let arr = split('   abde hasssnaoui kd', ' ')
// console.log(arr)
// console.log(join(arr, ' '))