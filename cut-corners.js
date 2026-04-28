function round(n){
    let int = 0;
    let x = n
    if (n > 0){
        while (x >= 1){
        x--
        int++
      }
    }else{
        while(x <= -1){
            x++
            int--
        }
    }
    let diff = n - int
    if (n >= 0){
        if (diff >= 0.5){
            return int+1
        }else{
            return int
        }
    }else{
        if(diff <= -0.5){ 
            return int-1
        }else{
            return int
        }
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
    }else{
        while(x <= -1){
            int--
            x++
        }
    }
    let diff = n - int
    if (diff == 0){
        return n
    }
    return int + 1
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
    let diff = n - int
    if (diff == 0){
        return int
    }
    if (n < 0){
        return int-1
    }
    return int
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