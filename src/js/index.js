import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */


fetch('https://api.github.com/users/karol-pietruczuk/repos?sort=created&direction=asc')
    .then(resp => resp.json())
    .then(resp => {
        for(let repo of resp){
            const {name, html_url} = repo;
            const repositoryList = document.querySelector('.list--js');
            const myTemplate = `<li class="list__item">
            ${name} <a href="${html_url}" title="link do repozytorium ${name} na githubie">
            link do githuba </a>
            </li>`;
            repositoryList.innerHTML += myTemplate;
        }
    })
    .catch(error => {
        console.log('Nie udało się pobrać');
    })