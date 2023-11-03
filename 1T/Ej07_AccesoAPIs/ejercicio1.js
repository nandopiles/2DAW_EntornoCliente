const urlAPI = 'https://api.thecatapi.com/v1/images/search?size=full';
let contTimesClicked = 0



/**
 * display the photo with the url specified
 * @param {String} urlImg
 * @param {MouseEvent} event
 * @returns {any}
 */
const displayPhoto = (urlImg, event) => {
    const divElement = document.createElement('div');
    const imgElement = document.createElement('img');

    divElement.setAttribute('id', 'photoContainer');
    imgElement.style.width = '100%';
    imgElement.style.height = '100%';
    imgElement.src = urlImg;

    event.target.insertAdjacentElement('afterend', divElement);
    document.getElementById('photoContainer').appendChild(imgElement);
}

const deletePhoto = () => {
    document.getElementById('photoContainer').remove();
}

/**
 * get an object from the API
 * @returns {Array}
 */
const getObjectFromAPI = async () => {
    try {
        const response = await fetch(urlAPI);
        if (response.ok) {
            const jsonResponse = await response.json();

            return jsonResponse;
        }
    }
    catch (error) {
        console.log(error);
    }
}



document.getElementsByName('cat')[0].addEventListener('click', async (event) => {
    let objectAPI = await getObjectFromAPI();

    if (contTimesClicked !== 0)
        deletePhoto();
    displayPhoto(objectAPI[0].url, event);
    contTimesClicked++;
});