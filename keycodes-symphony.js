export function compose(){
       document.addEventListener("keydown", (event) =>{
        let key = event.key;
            if (key >= 'a' && key <= 'z'){
                let div = document.createElement("div")
               div.classList.add("note");
                div.textContent = key;
                const hue = (event.key.charCodeAt(0) - 97) * (360 / 26)
                div.style.backgroundColor = `hsl(${hue}, 70%, 60%)`
                document.body.append(div)
            }
            if (key === "Backspace"){
                document.body.lastElementChild.remove();
            }
            if (key === "Escape"){
                document.body.innerHTML = "";
            }
       }
    )
}