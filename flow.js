function flow(funcs){
    return function(...args){
        let result = funcs[0](...args)
        for (let i = 1; i < funcs.length; i++){
            let fn = funcs[i]
            result = fn(result)
        }
        return result
    }
}
// const square = (nbr) => nbr * nbr
// const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

// const flowedFunctions = flow([add2Numbers, square])
// console.log(flowedFunctions(2, 3)) // -> 25