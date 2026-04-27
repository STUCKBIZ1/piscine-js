const escapeStr = "` \\ / \" '";
const arr = [4, '2'];
const obj = {
    str : "hello",
    obj : 0,
    bool : true,
    undef: undefined,
}
const nested = {
    arr : [4, undefined, '2'],
    obj : {
        str : 'hello',
        num : 9,
        bool : true,
    }
}
Object.freeze(arr)
Object.freeze(obj)
Object.freeze(nested)

