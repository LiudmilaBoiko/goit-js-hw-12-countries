import './styles.css';
import countryCard from './templates/countryCard.hbs';
// import countryUnderTen from './templates/countries-und10.hbs';
import countriesList from './templates/countriesList.hbs';
import API from './fetchCountries';
import getRefs from './getRefs';
// import '@pnotify/core/dist/BrightTheme.css';
// import '@pnotify/core/dist/PNotify.css';
// import { error } from '@pnotify/core';

// import { defaults } from '@pnotify/core';


const refs = getRefs();
var debounce = require('debounce');

refs.countryInput.addEventListener('input', debounce(onSearch, 1000)); 

function pushError(err) {
  error({
    text: `${err}`,
  });
}

function clearResult() { 
    refs.countryContainer.innerHTML = '';
}

function renderCountryCard(country) {   
    if (country.length === 1) {
        const markup = countryCard(country);
        refs.countriesMarkup.innerHTML = markup;
    // } else if (country.length >= 2 && country.length <= 10) {
    //     const markup = countryUnderTen(country);
    //     console.log(markup);
    //     refs.countriesMarkup.innerHTML = markup;
    } else if (country.length > 10) { 
        pushError('Сделайте более специфичный запрос. Слишком много совпадений!!');
        // console.log('Сделайте более специфичный запрос. Слишком много совпадений!!');
    }; 
 }

function onSearch(e) { 
    e.preventDefault();
    const searchQuery = refs.countryInput.value;
        if (searchQuery.length === 0) {
        clearResult();
        return;
    } else { 
        API.fetchCountry(searchQuery)
        .then(renderCountryCard)
        .catch(error => pushError('Ошибка ввода, такой страны не существует'));
    }
}





//  if (response.ok) return response.json();
//     if (response.status == 404) throw new Error('Not found');
//     throw new Error('Error fetching data');
  
