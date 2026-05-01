function vowelDots(str){
    let vowels = /[aeiouAEIOU]/g
    return str.replace(vowels, '$&.')
}
console.log(vowelDots("hello"))