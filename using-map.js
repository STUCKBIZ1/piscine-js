function citiesOnly(arryofobjects){
    let res = []
    arryofobjects.map(r => res.push(getvaliuefromkey(r, "city")))
    return res
}
function getvaliuefromkey(obj, ky){
    return obj[ky]    
}
// console.log(citiesOnly([
//   {
//     city: 'Los Angeles',
//     temperature: '  101 °F   ',
//   },
//   {
//     city: 'San Francisco',
//     temperature: ' 84 ° F   ',
//   },
// ]))
function upperCasingStates(strs){
    let res = [];                                                  
    strs.map(r => r = res.push(tocap((r.split(" ")))))
    return res
}
function tocap(strs){
    let re1 = [];
    re1= strs.map(r => r[0].toUpperCase() + r.slice(1).toLowerCase())
    return re1.join(" ")
}
function fahrenheitToCelsius(arr){
    return arr.map(temp =>{ 
        let num = Number(temp.replace("°F", ""))
        let c = Math.round((num - 32) * 5/9);
        return c + "°C"
    })
}
function trimTemp(objs){
    return objs.map(obj =>{
        obj["temperature"] = obj["temperature"].replaceAll(' ', '')
        return obj
    })
}
// console.log(trimTemp([
//   { city: 'Los Angeles', temperature: '  101 °F   ' },
//   { city: 'San Francisco', temperature: ' 84 ° F   ' },
// ]))
function tempForecasts(objs){
    return objs.map(obj => {
        let temp = obj["temperature"].match(/\d/g)
        obj["state"] = obj["state"][0].toUpperCase()+obj["state"].slice(1).toLowerCase();
        temp = Number(temp.join(''))
        temp = String(Math.round((temp-32)*5/9))+"°Celsius in "+obj["city"]+', '+obj["state"]
        return temp
    })
}
// console.log(tempForecasts([
//   {
//     city: 'Pasadena',
//     temperature: ' 101 °F',
//     state: 'california',
//     region: 'West',
//   },
// ]))