function slice(ars, start = 0, end = ars.length){
    let res = typeof ars === 'string' ? "" : [];

    if (start < 0) start += ars.length;
    if (end < 0) end += ars.length;
    if (end > ars.length){
        end = ars.length
    }
    for (let i = start; i < end; i++){
        if (typeof ars === 'string'){
            res += ars[i];
        } else {
            res.push(ars[i]);
        }
    }

    return res;
}
function chunk(arr, size){
    let marr =[];
    let count = size
    for (let i = 0; i < arr.length; i++){
        let ar = slice(arr, i, i+size)
        marr.push(ar)
        i += size -1
    }
    return marr

}
// console.log(chunk([1,2,3, 4,5], 2))