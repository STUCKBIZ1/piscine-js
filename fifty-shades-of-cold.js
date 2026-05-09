import {colors} from './fifty-shades-of-cold.data.js'

export function generateClasses(){
    let style = document.createElement("style");
    let css = "";
    colors.forEach(color => {
        css += `.${color}{
            background:${color};
        }`
    })
    style.textContent = css
    document.head.append(style)
}
export function generateColdShades(){
const c = [
"aqua",
"blue",
"turquoise",
"green",
"cyan",
"navy",
"purple"
]
    c.forEach(l => {
        if (colors.includes(l)){
         let div = document.createElement("div")
         div.textContent = l
         div.className = l
         document.body.append(div)
        }
    })

}
export function choseShade(divcontent){
    let divs = document.querySelectorAll('div')
    divs.forEach(div => {
        div.className = divcontent;
    })
}