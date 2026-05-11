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
// function omit(obj, arrstr) {
//     let newobject = {};
//     let keys = []
//     if (typeof arrstr === 'string') {
//         keys = arrstr.split(' ');
//     } else {
//         keys = arrstr
//     }
//     for (let i = 0; i < keys.length; i++) {
//         if (obj[keys[i]] !== undefined){
//         newobject[keys[i]] = obj[keys[i]]

//         }
//     }
//     return newobject
// }
function omit(obj, arrstr) {
    let newobject = {};
    let keys = [];
    if (typeof arrstr === 'string') {
        keys = arrstr.split(' ');
    } else {
        keys = arrstr
    }
    let x = Object.keys(obj)
    console.log(x);
    
    for (let i = 0; i < x.length; i++) {
        if (keys.includes(x[i])){
            continue
        }
        newobject[x[i]] = obj[x[i]]
            // if (!Object.hasOwn(obj, keys[i])){
        // newobject[keys[i]] = obj[keys[i]]
        // }
    }
    return newobject
}
// const tools = {
//   drill: 'bosh',
//   grinders: 'makita',
//   saws: 'dewalt'
// }

// const newtool = {
//   drill: 'bosh'
// }

// eq(
//   omit(tools, ['grinders', 'saws']),
//   newtool
// ) 