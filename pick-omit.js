function pick(obj, arrstr) {
    let newobject = {};
    let keys = []
    if (typeof arrstr === 'string') {
        keys = arrstr.split(' ');
    } else {
        keys = arrstr
    }
    for (let i = 0; i < keys.length; i++) {
        if (obj[keys[i]] !== undefined){
        newobject[keys[i]] = obj[keys[i]]

        }
    }
    return newobject
}
function omit(obj, arrstr) {
    let newobject = {};
    let keys = [];
    if (typeof arrstr === 'string') {
        keys = arrstr.split(' ');
    } else {
        keys = arrstr
    }
    for (let key in obj) {
        if (Object.hasOwn(obj, key)){
            continue
        }
        newobject[key] = obj[key]
    }
    return newobject
}
 console.log(omit({ something: 5, __proto__: { d: 6 } }, 'something'))