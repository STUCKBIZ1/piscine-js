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
    if (b === 0) return NaN

    if (a < 0){
        a = -a
        sign = -sign
    }
    if (b < 0){
        b = -b
        sign = -sign
    }

    if (a < b) return 0

    while (a >= b){
       a -= b;
       count++ 
    }
    if (sign === -1 && a > 0 || sign === 1 && a < 0 || sign === -1 && b > 0 || sign === 1 && b < 0){
        return -count
    }
    return +count
}
function modulo(a, b){
    if (b === 0) return NaN

    let originalA = a

    if (a < 0) a = -a
    if (b < 0) b = -b

    while (a >= b){
        a -= b
    }

    return originalA < 0 ? -a : a
}
// console.log(modulo(123, -22))