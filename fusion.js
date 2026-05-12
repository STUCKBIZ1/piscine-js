function fusion(obj1, obj2){
    let result = {}
    let keys = new Set([
        ...Object.keys(obj1),
        ...Object.keys(obj2)
    ])
    for (let key of keys){
        let v1 = obj1[key]
        let v2 = obj2[key]
        if (Array.isArray(v1) && Array.isArray(v2)){
            result[key] = [...v1, ...v2]
        }else if (typeof v1 === 'string' && typeof v2 === 'string'){
            // if (v1 === "") v1 = " "
            // if (v2 === "") v2 = " "
            result[key] = v1 +" "+ v2;
        }else if (typeof v1 === 'number' && typeof v2 === 'number'){
            result[key] = v1 + v2
        }else if (typeof v1 === 'object' && typeof v2 === 'object'){
            result[key] = fusion(v1, v2)
        }else if (typeof v1 !== typeof v2){
            result[key] = v2 ?? v1
        }
    }
    return result
}
// console.log(fusion({ a: "hello", b: [] }, { a: 4 }))
// console.log(fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] })) // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }