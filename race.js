function race(promises) {
  return new Promise((resolve, reject) => {
    for (const p of promises) {
      Promise.resolve(p).then(resolve).catch(reject);
    }
  });
}

function some(promises, count) {
  if (!promises.length || count === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    const results = [];
    let resolved = 0;
    let rejected = 0;

    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then(value => {
          results[index] = value;
          resolved++;

          if (resolved === count) {
            resolve(results.filter(v => v !== undefined || results.includes(v)).slice(0, count));
          }
        })
        .catch(() => {
          rejected++;

          if (rejected + count > promises.length) {
            reject(new Error('not enough resolved'));
          }
        });
    });
  });
}