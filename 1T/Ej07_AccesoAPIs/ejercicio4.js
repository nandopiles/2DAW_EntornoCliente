const urlAPI = 'https://api.github.com/search/users?q=JavaScript';



/**
 * get all the github users from the API who have in their names "JavaScript"
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

/**
 * display a specific github user avatar photo
 * @param {String} urlImg
 * @param {MouseEvent} event
 * @returns {any}
 */
const displayImg = (urlImg, event) => {
    const divElement = document.createElement('div');
    const imgElement = document.createElement('img');

    divElement.setAttribute('id', 'photoAvatar');
    imgElement.style.width = '100%';
    imgElement.style.height = '100%';
    imgElement.src = urlImg;

    event.target.insertAdjacentElement('afterend', divElement);
    document.getElementById('photoAvatar').appendChild(imgElement);
}



document.getElementsByName('profiles')[1].addEventListener('click', async (event) => {
    let objectsAPI = await getObjectFromAPI();
    displayImg(objectsAPI.items[0].avatar_url, event)
});