function filterShortStateName(arr){
    return arr.filter(str => str.length < 7)
}
function filterStartVowel(arr){
    return arr.filter(str => {
        switch (str[0]){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O': 
            case 'U':
            return str
        }
    })  
}
function filter5Vowels(arr){
    let vowls = "aeiouAEIOU";
    return arr.filter(str =>{
        if ((str.match(/[aeiouAEIOU]/g).length >= 5)){
            return str
        }
    })
}
function filter1DistinctVowel(arr){
    return arr.filter(str =>{
        if (isdistinct(str)){
            return str
        }
    })
}
function isdistinct(str){
    if (typeof str !== "string") return false;

    let v = str.match(/[aeiou]/gi);
    if (!v) return false;

    v = v.map(c => c.toLowerCase());

    let k = v[0];

    for (let i = 0; i < v.length; i++){
        if (k !== v[i]){
            return false;
        }
    }

    return true;
}
function multiFilter(arr){
    return arr.filter(obj => isvalid(obj));
}
function isvalid(obj){
    const vowels = "aeiouAEIOU";

    if (obj.capital.length < 8) return false;

    if (vowels.includes(obj.name[0])) return false;

    if (!/[aeiou]/i.test(obj.tag)) return false;

    if (obj.region === "South") return false;

    return true;
}
// console.log(filter1DistinctVowel([
//     'Alabama',
//     'Alaska',
//     'Arkansas',  
//     'Kansas',
//     'Maryland',
//     'Mississippi',
//     'New Jersey',
//     'Tennessee',
//   ]))

// multiFilter: accepts an array of objects, and returns only those which:

// the key capital contains at least 8 characters.

// the key name does not start with a vowel.

// the key tag has at least one vowel.

// the key region is not "South"