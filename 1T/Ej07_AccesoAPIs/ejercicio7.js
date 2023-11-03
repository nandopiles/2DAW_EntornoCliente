const urlAPI = 'https://api.github.com/search/users?';



/**
 * get all the github users from the API which they have in their names the username passed by parameter
 * @param {any} username
 * @returns {any}
 */
const getObjectFromAPI = async (username) => {
    try {
        const response = await fetch(urlAPI + `q=${username}`);
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
 * display a specific github user with all his info
 * @param {String} urlImg
 * @param {String} username
 * @param {Number} idUser
 * @param {MouseEvent} event
 * @returns {any}
 */
const displayImg = (urlImg, username, idUser, event) => {
    const divElement = document.createElement('div');
    const imgElement = document.createElement('img');
    const h1Element = document.createElement('h1');
    const h2Element = document.createElement('h2');

    divElement.setAttribute('id', 'photoAvatar');
    h2Element.innerHTML = 'Id: ' + idUser + "<hr>";
    h1Element.innerHTML = "Name: " + username;
    imgElement.style.width = '100%';
    imgElement.style.height = '100%';
    imgElement.src = urlImg;

    event.target.insertAdjacentElement('afterend', divElement);
    document.getElementById('photoAvatar').appendChild(h2Element);
    document.getElementById('photoAvatar').appendChild(h1Element);
    document.getElementById('photoAvatar').appendChild(imgElement);
}



document.getElementsByTagName('form')[1].addEventListener('submit', async (event) => {
    event.preventDefault();
    let nameToSearch = document.getElementsByName('search_term')[0].value;
    console.log(nameToSearch);
    let objectsAPI = await getObjectFromAPI(nameToSearch);
    console.log(objectsAPI);
    let positionToDisplay = parseInt(document.getElementsByName('position')[1].value);

    displayImg(objectsAPI.items[positionToDisplay].avatar_url, objectsAPI.items[positionToDisplay].login, objectsAPI.items[positionToDisplay].id, event)
});