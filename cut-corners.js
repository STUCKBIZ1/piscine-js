function trunc(n) {
    return n ^ 0;
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