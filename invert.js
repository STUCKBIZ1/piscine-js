function invert(obj){
    let newobj = {};
    for (let key in obj){
        if (typeof key === "object"){
            newobj[obj[key]] = invert(key)
        }else{
             newobj[obj[key]] = key;
        }
    }
    return newobj
}
// console.log(invert({a : 'b', b : 'a'}))