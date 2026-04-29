function triangle(str, n){
    let result = "";
    for(let i = 1; i <= n; i++){
        for (let j = 1; j <= i ; j++){
            result += str
        }
        result += "\n"
    }
    return result
}
// console.log(triangle("*", 78))