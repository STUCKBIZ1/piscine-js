function replica(target, ...sources) {
  for (const source of sources) {
    for (const key in source) {
      const value = source[key];

      if (value instanceof RegExp) {
        target[key] = value;

      } else if (Array.isArray(value)) {
        target[key] = replica([], value);

      } else if (value && typeof value === 'object') {
        if (!target[key] || typeof target[key] !== 'object' || Array.isArray(target[key])) {
          target[key] = {};
        }
        target[key] = replica(target[key], value);

      } else {
        target[key] = value;
      }
    }
  }
  return target;
}