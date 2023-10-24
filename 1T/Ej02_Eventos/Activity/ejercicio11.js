addEventListener('keypress', (event) => {   //* keypress -> character value
    if (event.key === "A") {                //* keydown -> any key
        document.getElementsByTagName("h1")[0].style.color = "orange"
    } else if (event.key === "B") {
        document.getElementsByTagName("h1")[0].style.color = "pink"
    } else if (event.key === "C") {
        document.getElementsByTagName("h1")[0].style.color = "brown"
    } else {
        document.getElementsByTagName("h1")[0].style.color = "white"
    }
})