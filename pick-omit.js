function pick(obj, arrstr){
let newobject = {};
let keys = []
if (typeof arrstr === 'string'){
     keys = arrstr.split(' ');
}else{
    keys = arrstr
}
for (let i = 0; i < keys.length; i++){
    newobject[keys[i]] = obj[keys[i]]
}
return newobject
}
function omit(obj, arrstr){
    let keys = [];
    if (typeof arrstr === 'string'){
        keys = arrstr.split(' ');
    }else{
        keys = arrstr
    }
    for (let i = 0; i < keys.length; i++){
        delete obj[keys[i]]
    }
    return obj
}
// console.log(pick({a : 'a', b : 'k', h : 'y'}, "a b"))