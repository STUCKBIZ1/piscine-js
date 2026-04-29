function pyramid(str, n) {
    let result = "";
    const len = str.length;

    for (let i = 0; i < n; i++) {

        for (let k = 0; k < n - i - 1; k++) {
            for (let s = 0; s < len; s++) {
                result += " ";
            }
        }

        for (let j = 0; j < 2 * i + 1; j++) {
            result += str;
        }

        if (i !== n - 1) {
            result += "\n";
        }
    }

    return result;
}