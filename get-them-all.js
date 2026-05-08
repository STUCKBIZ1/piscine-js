
export function getArchitects(){
    const ar = document.querySelectorAll("a") 
    const ar1 = document.querySelectorAll("span")
    return [ar, ar1]
}
export function getClassical() {
  const c = document.querySelectorAll("a.classical");
  const nc = document.querySelectorAll("a:not(.classical)");
  return [c, nc]
}
export function getActive(){
    const activeClassical = document.querySelectorAll("a.classical.active")
    const nonActiveClassical = document.querySelectorAll("a.classical:not(.active)")
    return [activeClassical, nonActiveClassical]
}
export function getBonannoPisano(){
    const isgetbn = document.getElementById("BonannoPisano")
    const isnogetbn = document.querySelectorAll("a.classical.active:not(#BonannoPisano)")
return [isgetbn, isnogetbn]
}
