function deepCopy(value) {
  if (value instanceof RegExp) return value;
  if (Array.isArray(value)) {
    return value.map(item => deepCopy(item));
  }
  if (typeof value === 'object' && value !== null) {
    const copy = {};
    for (const key in value) {
      copy[key] = deepCopy(value[key]);
    }
    return copy;
  }
  return value;
}