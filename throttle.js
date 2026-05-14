function throttle(func, wait) {
  let lastTime = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastTime >= wait) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

function opThrottle(func, wait, options = {}) {
  let lastTime = 0;
  let timeout = null;

  const leading = options.leading ?? false;
  const trailing = options.trailing ?? false;

  return function (...args) {
    const now = Date.now();

    if (!lastTime && !leading) {
      lastTime = now;
    }

    const remaining = wait - (now - lastTime);

    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      lastTime = now;

      if (leading) {
        func.apply(this, args);
      }
    } else if (trailing && !timeout) {
      timeout = setTimeout(() => {
        lastTime = leading ? Date.now() : 0;
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}