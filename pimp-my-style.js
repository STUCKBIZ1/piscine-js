
import {styles} from './pimp-my-style.data.js'
let index = 0;
let action = "add";
export function pimp(){
    let btn = document.querySelector(".button")
    if (action === "add"){
       btn.classList.add(styles[index])
       index++
       if (index === styles.length-1){
        action = "remove"
       }
       
    }else{
        btn.classList.remove(styles[index])
        index--
        if (index === 0){
            action = "add"
        }
    }
}