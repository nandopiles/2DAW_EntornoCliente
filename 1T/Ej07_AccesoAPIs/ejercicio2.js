const urlAPI = 'https://api.thecatapi.com/v1/images/search?size=full';
const numImgsToShow = 10;
let contTimesClicked = 0



/**
 * display the photo with the url specified
 * @param {String} urlImg
 * @param {MouseEvent} event
 * @param {Number} numPhotoId
 * @returns {any}
 */
const displayPhoto = (urlImg, event, numPhotoId) => {
    const divElement = document.createElement('div');
    const imgElement = document.createElement('img');

    divElement.setAttribute('id', `photoContainer${numPhotoId}`);
    imgElement.style.width = '100%';
    imgElement.style.height = '100%';
    imgElement.src = urlImg;

    event.target.insertAdjacentElement('afterend', divElement);
    document.getElementById(`photoContainer${numPhotoId}`).appendChild(imgElement);
}

/**
 * get 10 objects from the API
 * @returns {Array}
 */
const getObjectFromAPI = async () => {
    try {
        const response = await fetch(urlAPI + `&limit=${numImgsToShow}`); // return 10 objects
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);

            return jsonResponse;
        }
    }
    catch (error) {
        console.log(error);
    }
}



document.getElementsByName('cats')[0].addEventListener('click', async (event) => {
    if (contTimesClicked === 0) {
        let objectsAPI = await getObjectFromAPI();
        for (let i = 0; i < objectsAPI.length; i++)
            displayPhoto(objectsAPI[i].url, event);
    }
    contTimesClicked++;
});