function letterSpaceNumber(str ) {
    return str.match(/[a-zA-Z] [0-9](?![a-zA-Z])/g) || []
}
console.log(letterSpaceNumber('example 1, example 20'))