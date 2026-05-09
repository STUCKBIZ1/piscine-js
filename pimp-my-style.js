import {styles} from './pimp-my-style.data.js'
let index = 0;
let action = "add";

export function pimp(){
    let btn = document.querySelector(".button")
    if (action === "add"){
        btn.classList.add(styles[index])
        index++
        if (index === styles.length){
            btn.classList.add("unpimp")
            action = "remove"
        }
    } else {
        btn.classList.remove(styles[index - 1])
        index--
        if (index === 0){
            btn.classList.remove("unpimp")
            action = "add"
        }
    }
}