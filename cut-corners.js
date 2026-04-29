function trunc(n) {
    if (n >= 0) {
        let int = 0, x = n;
        while (x >= 1) { int++; x -= 1; }
        return int;
    } else {
        let int = 0, x = n;
        while (x <= -1) { int--; x += 1; }
        return int;
    }
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