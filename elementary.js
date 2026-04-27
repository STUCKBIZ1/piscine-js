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
