function split(str, sep){
    let arr = [];
    let minres = "";
    if (sep === "") {
        for (let i = 0; i < str.length; i++){
            arr.push(str[i])
        }
        return arr
    }
    for (let i = 0; i < str.length; i++){
        if (slice(str, i, i+sep.length) === sep){
            arr.push(minres)
            minres = ""
            i += sep.length-1
        }else{
          minres += str[i]  
        }
    }
        arr.push(minres)
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
// let arr = split('ggg ddd b  ', '')
// console.log(arr)
// console.log(join(arr, ''))
function slice(ars, start = 0, end = ars.length){
    let res = typeof ars === 'string' ? "" : [];

    if (start < 0) start += ars.length;
    if (end < 0) end += ars.length;

    for (let i = start; i < end; i++){
        if (typeof ars === 'string'){
            res += ars[i];
        } else {
            res.push(ars[i]);
        }
    }

    return res;
}''