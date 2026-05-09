export function build(n){
    let divs = [];
    for (let i = 1; i <= n; i++){
        let div = document.createElement("div")
        div.id  = "brick-"+i;
        if (i % 3 === 2){
           div.setAttribute("data-foundation", true) 
        }
        divs.push(div)
    }
    let k = 0;
    const h = setInterval(()=> {
        document.body.append(divs[k])
        k++
        if (k === divs.length){
            clearInterval(h)
        }
    }, 100)
}
export function repair(...ids){
    ids.forEach(id => {
                console.log(id)

        let el = document.getElementById(id)
       if (!el) {
            console.warn("missing brick:", id)
            return
        }
        if (el.hasAttribute("data-foundation")){
            el.setAttribute("data-repaired", "in progress")
        }else{
            el.setAttribute("data-repaired", true)
        }
    })
}
export function destroy(){
    document.body.lastElementChild.remove();
}