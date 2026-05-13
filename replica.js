function replica(target, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      if (source[key] instanceof RegExp) {
        target[key] = source[key];
      } else if (Array.isArray(source[key])) {
        target[key] = replica([], source[key]);
      } else if (typeof source[key] === 'object' && source[key] !== null) {
        target[key] = replica({}, source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}