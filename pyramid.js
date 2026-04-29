function pyramid(str, n){
    let result = "";
    let steps = 0;
    let g = n -1
    for(let i = 1; i <= n; i++){
        for (let k = 1; k <= g; k++){
                result += " ";
            }
        for (let j = 1; j <= i+steps ; j++){
            result += str
        }
        if (i != n){
            result += "\n"
        }
        g--
        steps++
    }
    return result
}
// console.log(pyramid("$", 5))