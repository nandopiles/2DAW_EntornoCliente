const imgPaths = Array.from({ length: 3 }, (_, index) => `url(images/${index + 1}.jpg)`)
let toggleTransitionElements = true



/**
 * change the appearance of the page making the height of the Container to 600px and the height of the Photo to 0px apart from doing more things
 * @returns {any}
 */
const changeToSecondAppearance = () => {
    const photoContainers = document.querySelectorAll('.photo-container')
    const photos = document.querySelectorAll('.photo')

    photos.forEach((photo) => {
        photo.style.height = "0px"
        photo.style.color = "white"
        photo.style.lineHeight = "" // returns to the default value
    })
    photoContainers.forEach(container => {
        container.style.height = "600px"
        container.style.backgroundColor = "black"
    })
    document.getElementsByTagName("h1")[0].style.color = "black"
    document.body.style.backgroundColor = "white"
}

/**
 * change the appearance of the page making different heights and line-heights depending of the photo apart from doing more things
 * @returns {any}
 */
const changeToThirdAppearance = () => {
    const photoContainers = document.querySelectorAll('.photo-container')
    const photos = document.querySelectorAll('.photo')
    const heights = [200, 400, 600]
    const lineHeights = [150, 300, 400]

    photos.forEach((photo, index) => {
        photo.style.height = `${heights[index]}px`
        photo.style.lineHeight = `${lineHeights[index]}px`
        photo.style.color = "black"
    })
    photoContainers.forEach((container) => container.style.height = "200px")
    document.getElementsByTagName("h1")[0].style.color = "white"
    document.body.style.backgroundColor = "black"
}

/**
 * conf the classes that are going to be affected by the transitions. 
 * You have to pass by parameter all the classes without the "." and the last item must be the duration of the animation.
 * 
 ** (The duration must be passed in seconds and you don't have to write the "s" of seconds)
 * 
 * @param {Array} classesAndDuration
 * @returns {any}
 * @example confTransitionToEachClass('classContainer', 'classPhoto', '3')
 */
const confTransitionToEachClass = (...classesAndDuration) => {
    const body = document.body
    const duration = classesAndDuration[classesAndDuration.length - 1]

    classesAndDuration.forEach((classAndDuration, index) => {
        if (index < classesAndDuration.length - 1) {
            const elementsOfTheClass = document.querySelectorAll(`.${classAndDuration}`)

            elementsOfTheClass.forEach((element) => element.style.transition = `${duration}s`)
        }
    })
    body.style.transition = `${duration}s`
}



Array.from(document.getElementsByClassName("photo")).forEach((img, index) => img.style.backgroundImage = imgPaths[index])

// the timeout is used for waiting to config the transitions after the changing of the img
setTimeout(() => {
    confTransitionToEachClass('photo-container', 'photo', '2')
    setInterval(() => {
        if (toggleTransitionElements)
            changeToSecondAppearance()
        else
            changeToThirdAppearance()
        toggleTransitionElements = !toggleTransitionElements
    }, 5000);
}, 10);
