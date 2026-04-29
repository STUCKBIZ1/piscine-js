function nasa(n){
    let res = "";
    if (n == 0){
        return ""
    }
    for (let i = 1; i <= n; i++){
        if (i % 5 === 0 && i % 3 === 0){
            res += "NASA";
        }else if(i % 5 === 0){
            res += "SA";
        }else if(i % 3 === 0){
            res += "NA"
        }else{
            res += i
        }
        if (i != n){
            res += " ";
        }
    }
    return res
}
console.log(nasa(13))