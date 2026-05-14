function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

function opDebounce(func, wait, options = {}) {
  let timeout;
  return function (...args) {
    const callNow = options.leading && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      if (!options.leading) func.apply(this, args);
    }, wait);
    if (callNow) func.apply(this, args);
  };
}