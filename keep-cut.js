function cutFirst(str){
    let result = "";
    let firstchar = 2;
//     if (str.length < 2){
//         return str
//     }
    for (let i = firstchar; i < str.length; i++){
            result += str[i]
    }
    return result
}
function cutLast(str){
    let result = "";
    let laststchar = str.length-2;
//     if (str.length < 2){
//         return str
//     }
    for (let i = 0; i < laststchar; i++){
            result += str[i]
    }
    return result
}
function cutFirstLast(str){
    let result = "";
//     if (str.length < 4){
//         return str
//     }
    let firstchar = 2;
    let laststchar = str.length-2;
    for (let i = firstchar; i < laststchar; i++){
            result += str[i]
    }
    return result
}
function keepFirst(str){
    let result = "";
    let maxichars = 2;
    if (str.length < maxichars || str == ""){
        maxichars = str.length
    }
    for (let i = 0; i < maxichars; i++){
            result += str[i]
    }
    return result
}
function keepLast(str){
    let result = "";
    let startindex = str.length-2;
    if (str.length === 1 || str === ""){
        return str
    }
    for (let i = startindex; i < str.length; i++){
            result += str[i]
    }
    return result
}
function keepFirstLast(str){
    let result = "";
    if (str.length < 4){
        return str
    }
    let maxichars = 2
    let startindex = str.length-2;
    for (let i = 0; i < maxichars; i++){
            result += str[i]
    }
    for (let i = startindex; i < str.length; i++){
            result += str[i]
    }
    return result
}
// console.log(cutFirstLast('aaaaa'))