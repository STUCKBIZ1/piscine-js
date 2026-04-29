function trunc(n) {
    return Math.sign(n) * Math.abs(n - 0.5 + Math.sign(n) * 0.5);
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