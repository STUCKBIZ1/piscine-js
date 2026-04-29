function trunc(n) {
    let int = 0
    let x = Math.abs(n)
    while (x >= 1000) { x -= 1000; int += 1000; }
    while (x >= 100)  { x -= 100;  int += 100;  }
    while (x >= 10)   { x -= 10;   int += 10;   }
    while (x >= 1)    { x -= 1;    int += 1;    }
    return (n < 0) ? -int : int
}

function round(n) {
    const t = trunc(n);
    const x = n - t;
    if (n >= 0) return x >= 0.5 ? t + 1 : t;
    else        return x <= -0.5 ? t - 1 : t;
}

function floor(n) {
    const t = trunc(n);
    const x = n - t;
    return (x < 0) ? t - 1 : t;
}

function ceil(n) {
    const t = trunc(n);
    const x = n - t;
    return (x > 0) ? t + 1 : t;
}
const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))