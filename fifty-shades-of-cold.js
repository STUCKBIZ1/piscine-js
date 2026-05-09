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
const cold = ['aqua', 'blue', 'turquoise', 'green', 'purple', 'cyan', 'navy']
    colors.sort().forEach(color => {
        if (cold.some(c => color.includes(c))){
         let div = document.createElement("div")
         div.textContent = color
         div.className = color
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