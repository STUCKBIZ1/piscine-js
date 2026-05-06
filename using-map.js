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
    return arr.map(temp => { 
        let num = Number(temp.replace("°F", "").trim())
        let c = Math.floor((num - 32) * 5 / 9)
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
        let temp = obj["temperature"].replace("°F", "")
        let stat = obj["state"].split(' ').map(s => s[0].toUpperCase()+s.slice(1).toLowerCase()).join(' ');
        temp = Number(temp)
        temp =  Math.floor((temp - 32) * 5 / 9)
        return String(temp+"°Celsius in "+obj["city"]+", "+stat)
    })
}
// console.log(tempForecasts([
//   {
//     city: 'Pasadena',
//     temperature: ' -1 °F',
//     state: 'california',
//     region: 'West',
//   },
// ]))