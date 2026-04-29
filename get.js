function get(obj, path){
    let p = typeof path === 'string'? path.split('.') : path
    let [first, ...rest] = p
    if (obj === undefined)return undefined;
    if (p.length===0){
        return obj
    }
    if (rest.length === 0){
        return obj[first]
    }
    return get(obj?.[first], rest)
}
const src = { nested: { key: 'value' } }
const path = 'neste.skdaa'
console.log(get(src, path)) // -> 'peekaboo'