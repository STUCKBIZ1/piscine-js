function retry(count, callback) {
  return async function (...args) {
    let errors = 0;
    while (true) {
      try {
        return await callback(...args);
      } catch (e) {
        errors++;
        if (errors > count) throw e;
      }
    }
  };
}

function timeout(delay, callback) {
  return async function (...args) {
    const timer = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), delay)
    );
    return Promise.race([callback(...args), timer]);
  };
}