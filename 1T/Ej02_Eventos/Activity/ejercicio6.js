/**
 * Shows or Hides the imgs
 * @param {any} param => action to do (hide/show)
 * @returns {any}
 */
let hideOrShowImg = (param) => {
    for (let i = 1; i < document.getElementsByTagName("img").length; i++) {
        document.getElementsByTagName("img")[i].style.display = param;
    }
}
hideOrShowImg("none")
let elementsHide = true

/**
 * Does the logic of knowing if the elements are hidden or not
 * @param {any} h1 => title
 * @returns {any}
 */
document.getElementsByTagName("h1")[0].addEventListener('dblclick', () => {
    if (elementsHide) {
        hideOrShowImg("inline")
        elementsHide = false
    } else {
        hideOrShowImg("none")
        elementsHide = true
    }
})