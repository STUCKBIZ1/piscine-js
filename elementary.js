function multiply(a, b){
    let result = 0
    for (let i = Math.abs(b); i >= 1; i--){
        result += Math.abs(a)
    }
    if ((a > 0 && b < 0) || (a < 0 && b > 0)){
        return -result
    }
    return result
}
function divide(a, b){
    let sign = 1;
    let count = 0;
    if (a < 0){
        a = -a
        sign = -sign
    }
    if (b < 0){
        b = -b
        sign = -sign
    }
    while (a >= b){
       a -= b;
       count++ 
    }
    return count * sign
}
function modulo(a, b){
    let sign = 1;
    let count = 0;
    if (a < 0){
        a = -a
        sign = -sign
    }
    if (b < 0){
        b = -b
        sign = -sign
    }
    while (a >= b){
       a -= b;
       count++ 
    }
    return a * sign
}
// console.log(modulo(2, -7))