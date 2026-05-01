function ionOut(str){
    let s = /\b\w*t(?=ion)/g
    return str.match(s) || [];
}