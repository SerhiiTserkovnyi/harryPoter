let boxContainer = document.querySelector('.box-container');
async function getResponse() {
    let response = await (await fetch('http://hp-api.herokuapp.com/api/characters')).json();

    console.log(response);
    response.slice(0, 25).forEach(({ name, alternate_names, species, image }) => {

        boxContainer.innerHTML += `<div class="box"><div class="actor-name">${name}</div>
        <div class="species">${species}</div>
        <div class="image-film"><img src="${image}"></div></div>`;
    });

}
getResponse();