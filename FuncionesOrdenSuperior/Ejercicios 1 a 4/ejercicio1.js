const imagePaths = Array.from({ length: 6 }, (_, index) => `images/${index + 1}.jpg`); // _ => means that we ignore that variable
const arrayPhotos = Array.from(document.getElementsByClassName("photo"))
const inverseArrayPhotos = arrayPhotos.slice().reverse()
let contGeneralAnimationOpacityInterval = 0
let contGeneralAnimationSizeInterval = 0



/**
 * change the opacity of the photo to the given opacity
 * @param {any} photo
 * @param {any} opacity
 * @returns {any}
 */
const changeOpacity = (photo, opacity) => photo.style.opacity = opacity

/**
 * change the width and height of the photo to the given params
 * @param {any} photo
 * @param {any} width
 * @param {any} height
 * @returns {any}
 */
const changeSize = (photo, width, height) => {
    photo.style.width = width
    photo.style.height = height
}

/**
 * Change the opacity of all the photos inside the array given
 * @param {any} array
 * @param {any} opacity
 * @returns {any}
 */
const changeOpacityOfSpecificArray = (array, opacity) => {
    let contInterval = 0

    const interval = setInterval(() => {
        changeOpacity(array[contInterval], opacity)
        contInterval++
        if (contInterval > array.length - 1)
            clearInterval(interval)
    }, 100)
}

/**
 * Do an animation effect changing the opacity of the photos
 * @returns {any}
 */
const execAnimationOpacityPhotos = () => {
    let contInternalInterval = 0

    changeOpacityOfSpecificArray(arrayPhotos, "60%")
    const internalAnimationOpacityInterval = setInterval(() => {
        changeOpacityOfSpecificArray(inverseArrayPhotos, "100%")
        contInternalInterval++
        if (contInternalInterval === 1)
            clearInterval(internalAnimationOpacityInterval)
    }, (imagePaths.length * 100))
}

/**
 * Do an animation effect increasing/decreasing the width and height of the photos. Change the opacity too
 * @param {any} interval
 * @param {any} opacity
 * @param {any} width
 * @param {any} height
 * @returns {any}
 */
const execAnimationChangeSizePhotos = (interval, opacity, width, height) => {
    arrayPhotos.forEach((photo) => {
        changeOpacity(photo, opacity)
        changeSize(photo, width, height)
    })
    contGeneralAnimationSizeInterval++
    if (contGeneralAnimationSizeInterval === 1) {
        contGeneralAnimationSizeInterval = 0
        clearInterval(interval)
    }
}

/**
 * change the visibility of all the photos
 * @param {any} option hidden / visible
 * @returns {any}
 */
const changeVisibilityImgs = (option) => Array.from(document.getElementsByClassName("photo")).forEach((photo) => photo.style.visibility = option)

/**
 * return to show all the photos instead of just the bigger one
 * @param {any} img
 * @returns {any}
 */
const removeBiggerPhoto = (img) => {
    img.addEventListener('click', () => {
        document.getElementsByClassName("elementor-grid-3")[0].removeChild(document.getElementsByClassName("elementor-grid-3")[0].firstChild)
        changeVisibilityImgs('visible')
    })
}



// set the background depending on the index of the image
imagePaths.map((imgPath, index) => document.getElementsByClassName("photo")[index].style.backgroundImage = `url(${imgPath})`);

execAnimationOpacityPhotos()
const generalAnimationOpacityInterval = setInterval(() => {
    execAnimationOpacityPhotos()
    contGeneralAnimationOpacityInterval++
    if (contGeneralAnimationOpacityInterval === 1) {
        clearInterval(generalAnimationOpacityInterval)
    }
}, 1800) // 1800mls (of waiting each lap)

const increaseSizeInterval1 = setInterval(() => execAnimationChangeSizePhotos(increaseSizeInterval1, "50%", "105%", "105%"), 3700)
const decreaseSizeInterval1 = setInterval(() => execAnimationChangeSizePhotos(decreaseSizeInterval1, "100%", "100%", "100%"), 4000)
const increaseSizeInterval2 = setInterval(() => execAnimationChangeSizePhotos(increaseSizeInterval2, "50%", "105%", "105%"), 4400)
const decreaseSizeInterval2 = setInterval(() => execAnimationChangeSizePhotos(decreaseSizeInterval2, "100%", "100%", "100%"), 4800)

arrayPhotos.map((elementPhoto) =>
    elementPhoto.addEventListener('click', () => {
        const elementImg = document.createElement("img")

        changeVisibilityImgs('hidden')
        elementImg.src = elementPhoto.style.backgroundImage.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, ''); // transform an url() to the correct format of img.src
        document.getElementsByClassName("elementor-grid-3")[0].insertAdjacentElement('afterbegin', elementImg)
        document.getElementsByTagName("img")[0].style.width = "1200px"
        document.getElementsByTagName("img")[0].style.height = "500px"
        removeBiggerPhoto(document.getElementsByTagName("img")[0])
    }))