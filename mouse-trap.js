export function createCircle(){
    document.addEventListener("click", (e)=>{
        let circle = document.createElement("div")
        let x = e.clientX
        let y = e.clientY
        circle.className = "circle"
        circle.style.left = x - 25 + "px"
        circle.style.top = y - 25 + "px"
        circle.style.backgroundColor = "blue"
        document.body.append(circle)
    })
}
export function moveCircle(){
    document.addEventListener("mousemove", (e)=>{
        
    })
}
export function setBox(){

}