//hide elements
document.getElementsByClassName("nutrition")[0].style.display = "none"

//show elements
document.getElementsByTagName("img")[0].addEventListener('click', () => {
    document.getElementsByClassName("nutrition")[0].style.display = "inline"
})