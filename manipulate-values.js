function filterValues(obj, callback) {
  const result = {};
  for (const key in obj) {
    if (callback(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}

function mapValues(obj, callback) {
  const result = {};
  for (const key in obj) {
    result[key] = callback(obj[key]);
  }
  return result;
}

function reduceValues(obj, callback, initialValue) {
  const values = Object.values(obj);
  let acc;
  let startIndex;

  if (initialValue !== undefined) {
    acc = initialValue;
    startIndex = 0;
  } else {
    acc = values[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < values.length; i++) {
    acc = callback(acc, values[i]);
  }

  return acc;
}