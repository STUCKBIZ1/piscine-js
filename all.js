function all(obj) {
  const keys = Object.keys(obj);

  return new Promise((resolve, reject) => {
    if (keys.length === 0) {
      resolve({});
      return;
    }

    const result = {};
    let count = 0;

    keys.forEach(key => {
      Promise.resolve(obj[key])
        .then(value => {
          result[key] = value;
          count++;

          if (count === keys.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
}