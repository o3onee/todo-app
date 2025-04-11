export function elemCreate (elem,data) {

    const el = document.createElement(elem)
    el.textContent = data
    // console.log(el)
    return el

}
