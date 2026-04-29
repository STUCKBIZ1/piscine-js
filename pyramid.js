function pyramid(str, n) {
    let result = "";

    for (let i = 1; i <= n; i++) {
        for (let k = 1; k <= n - i; k++) {
            result += " ";
        }
        for (let j = 1; j <= (2 * i - 1); j++) {
            result += str;
        }
        if (i !== n) {
            result += "\n";
        }
    }

    return result;
}
//  console.log(pyramid('{}', 12))