function RNA(dna){
    let result = "";
    let map = {
        G : "C",
        C : "G",
        T : "A",
        A : "U",
    }
    for (let i = 0; i < dna.length; i++){
        result += map[dna[i]]
    }
    return result
}
function DNA(rna){
    let result = "";
    let map = {
        C : "G",
        G : "C",
        A : "T",
        U : "A",
    }
    for (let i = 0; i < rna.length; i++){
        result += map[rna[i]]
    }
    return result
}