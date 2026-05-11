function invert(obj) {
    let newobj = {};

    for (const key of Object.keys(obj)) {
        newobj[obj[key]] = key;
    }

    return newobj;
}