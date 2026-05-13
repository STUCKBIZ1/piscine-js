export function filterKeys(obj, callback) {
  const result = {};
  for (const key in obj) {
    if (callback(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

export function mapKeys(obj, callback) {
  const result = {};
  for (const key in obj) {
    const newKey = callback(key);
    result[newKey] = obj[key]; 
  }
  return result;
}

export function reduceKeys(obj, callback, initialValue) {
  const keys = Object.keys(obj);
  let acc;
  let startIndex;

  if (initialValue !== undefined) {
    acc = initialValue;
    startIndex = 0;
  } else {
    acc = keys[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < keys.length; i++) {
    acc = callback(acc, keys[i]);
  }
  return acc;
}