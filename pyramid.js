function pyramid(str, n) {
    let result = "";

    for (let i = 0; i < n; i++) {
        for (let k = 0; k < n - i; k++) {
            result += " ";
        }
        for (let j = 0; j < (2 * i + 1); j++) {
            result += str;
        }
        if (i !== n-1) {
            result += "\n";
        }
    }

    return result;
}
 console.log(pyramid('{}', 12))