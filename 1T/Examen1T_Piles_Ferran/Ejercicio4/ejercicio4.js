const urlAPI = "https://swapi.dev/api/films/";
let apiResponseData;
let cont = 0;



/**
 * Gets all info about films from the API.
 * @returns {void}
 */
const loadDataFromApi = async () => {
    try {
        const response = await fetch(urlAPI);
        if (response.ok) {
            apiResponseData = await response.json();
        }
    }
    catch (error) {
        console.log(error);
    }
};

/**
 * When the user clicks the img it will be displayed all the films.
 * @returns {any}
 */
const displayFilms = async () => {
    await loadDataFromApi();
    console.log(apiResponseData);
    document.getElementsByClassName('photo')[0].addEventListener('click', () => {
        if (cont === 0) {
            apiResponseData.results.forEach((_, index) => {
                const divParentElement = document.createElement('div');
                const divImgElement = document.createElement('div');
                const imgElement = document.createElement('img');
                const spanElement = document.createElement('span');

                divParentElement.className = "photo";
                divImgElement.className = "image-container";
                spanElement.className = "caption";

                document.body.appendChild(divParentElement);
                divParentElement.appendChild(divImgElement);
                divParentElement.appendChild(spanElement);
                divImgElement.appendChild(imgElement);

                imgElement.src = "https://www.lavanguardia.com/files/image_948_465/uploads/2020/05/04/5fa922920d3b5.png";
                spanElement.innerHTML = apiResponseData.results[index].title + "<br><br>" + apiResponseData.results[index].opening_crawl;
            });
            cont++;
        }
    });
};


displayFilms();