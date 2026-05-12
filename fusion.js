function fusion(obj1, obj2){
    let resultobj = {};
    let keysobj1 = Object.keys(obj1)
    let keysobj2 = Object.keys(obj2)
    for (let key of keysobj1){
        resultobj[key] = obj1[key];
        if (Array.isArray(resultobj[key])){
        resultobj[key].push(...obj2[key])
            
        }
    }
    return resultobj
}
fusion({ arr: [1, "2"] }, { arr: [2] }); 
fusion({ arr: [], arr1: [5] },{ arr: [10, 3], arr1: [15, 3], arr2: ["7", "1"] }); // ->{ arr: [ 10, 3 ], arr1: [ 5, 15, 3 ], arr2: [ '7', '1' ] }