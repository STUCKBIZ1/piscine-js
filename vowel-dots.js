function vowelDots(str){
    return str.replace(/[aeiouAEIOU]/g, '$&.')
}
console.log(vowelDots("hello"))