function invert(obj){
    let newobj = {};
    for (let key in obj){
        if (typeof key === "object"){
            // newobj[obj[key]] = invert(key)
            continue
        }else{
             newobj[obj[key]] = key;
        }
    }
    return newobj
}
//  console.log(invert({ f: 5, __proto__: { d: 6 } }))