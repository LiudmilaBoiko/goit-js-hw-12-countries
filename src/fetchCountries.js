import './styles.css';
// import countryInfoTpl from '../src/templates/countryInfo.hbs';
// import { format } from 'core-js/fn/date';

const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountry(country) { 
    return fetch(`${BASE_URL}/name/${country}`)
        .then(response => {
                if(response.status !== 404){
                return response.json();
            } 
            // console.log(response.status);
        });
}

export default {fetchCountry}

// const r = fetch(`https://restcountries.eu/rest/v2/name/Ukraine`);

// console.log(r);
// const refs = getRefs();

// refs.input.addEventListener("input", debounce(onSearch, 1000))

// function onSearch(e) { 
//     e.preventDefault();

//     fetchCountry()
//     .then(renderCountryInfo)
//         .catch(error => console.log(error))
//         .finally(() => form.reset);//очистка формы
// };



// function fetchCountry(searchQuery) {
//     return fetch(`https://restcountries.eu/rest/v2/name/${Ukraine}`)
//         .then(response => {
//           return response.json();
//     });
// };

// function renderCountryInfo(country) { 
//  console.log(country);
//  const markup = countryInfoTpl(country);
// };
