function interpolation({ step, start, end, callback, duration }) {
  const delay = duration / step;
  const range = end - start;

  for (let i = 0; i < step; i++) {
    const x = start + (range * i) / step;
    const t = delay * (i + 1);
    setTimeout(() => callback([x, t]), t);
  }
}