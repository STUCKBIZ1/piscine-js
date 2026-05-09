export function generateLetters(){
    let alphaapper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let total = 120;
    for (let i = 0; i < total; i++){
        let div = document.createElement("div")
        div.textContent = alphaapper[Math.floor(Math.random()*alphaapper.length)]
        let fontsize = i+11;
        div.style.fontSize = fontsize+"px";
        if (i < total / 3){
            div.style.fontWeight = 300
        }else if(i < (total/3)*2){
            div.style.fontWeight = 400
        }else{
            div.style.fontWeight = 600
        }
        document.body.append(div)
    }
}