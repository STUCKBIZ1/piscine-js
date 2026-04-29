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
}