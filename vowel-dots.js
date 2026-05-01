function vowelDots(str){
    return str.replace(/[aeiouAEIOU]/, '$&.')
}
console.log(vowelDots("hello"))