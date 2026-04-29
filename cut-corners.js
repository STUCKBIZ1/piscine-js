function round(n){
    let int = 0;
    let x = n
    if (n >= 0){
        while (x >= 1){
        x--
        int++
      }
      return (x >= -0.5)? int: int + 1
    }else{
        while(x <= -1){
            x++
            int--
        }
        return (x <= -0.5)? int : int-1
    }
}
function ceil(n){
    let int = 0;
    let x = n;
    if (n >= 0){
        while(x >= 1){
            int++
            x--
        }
        return (n === 0)? int : int+1
    }else{
        while(x <= -1){
            int--
            x++
        }
        return int
    }
}
function floor(n){
    let int = 0;
    let x = n;
    if (n >= 0){
        while(x >= 1){
            int++
            x--
        }
    }else{
        while(x <= -1){
            int--
            x++
        }
    }
    return (x === 0)? int : int -1
}
function trunc(n){
    let int = 0;
    let x = n;
    if (n >= 0){
        while(x >= 1){
            int++
            x--
        }
    }else{
        while(x <= -1){
            int--
            x++
        }
    }
    return int
}
const nums = [3.7, -3.7, 3.1, -3.1]
console.log(nums.map(round))
console.log(nums.map(floor))
console.log(nums.map(trunc))
console.log(nums.map(ceil))