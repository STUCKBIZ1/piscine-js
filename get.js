function get(obj, path){
    let p = typeof path === 'string'? path.split('.') : path
    let [first, ...rest] = p
    if (p.length===0){
        return obj
    }
    if (rest.length === 0){
        return obj[first]
    }
    return get(obj[first], rest)
}
// const src = { nested: { key: 'peekaboo' } }
// const path = 'nested.key'
// console.log(get(src, path))