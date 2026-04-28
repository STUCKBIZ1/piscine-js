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