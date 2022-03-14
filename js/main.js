let boxContainer = document.querySelector('.box-container');
let searchInput = document.querySelector('.searchInput');
async function getResponse(f, e) {
    response = await fetch('http://hp-api.herokuapp.com/api/characters')
        .then(res => res.json());
    response.slice(f, e).forEach(({ name, species, image }) => {
        boxContainer.innerHTML += `<div class="box"><div class="actor-name">${name}</div>
        <div class="species">${species}</div>
        <div class="image-film"><img src="${image}"></div></div>`;
    });

}



getResponse(0, 5);