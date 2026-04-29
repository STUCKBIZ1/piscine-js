function trunc(n) {
  if (n<0){
    return -trunc(-n)
  }
  if (n<1){
    return 0
  }
  let power=1
  while(power*2<=n){
    power*=2
  }
  return power+trunc(n-power)
}

function round(n) {
    const t = trunc(n);
    const x = n - t;
    if (n >= 0) return x >= 0.5 ? t + 1 : t;
    else        return x <= -0.5 ? t - 1 : t;
}

function floor(n) {
    const t = trunc(n);
    const x = n - t;
    return (x < 0) ? t - 1 : t;
}

function ceil(n) {
    const t = trunc(n);
    const x = n - t;
    return (x > 0) ? t + 1 : t;
}
// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))