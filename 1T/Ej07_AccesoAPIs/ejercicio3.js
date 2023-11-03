const urlAPI = 'https://api.github.com/search/users?q=JavaScript';



/**
 * get all the github users which the have in their names "JavaScript" from the API
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



document.getElementsByName('profiles')[0].addEventListener('click', async () => {
    let objectsAPI = await getObjectFromAPI();

    console.log(objectsAPI.items[0].login);
});