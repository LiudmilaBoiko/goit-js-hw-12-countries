import './styles.css';
import countryCard from './templates/countryCard.hbs';
import countriesList from './templates/countriesList.hbs';
import API from './fetchCountries';
import getRefs from './getRefs';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

import { defaults } from '@pnotify/core';


const refs = getRefs();
var debounce = require('debounce');

refs.countryInput.addEventListener('input', debounce(onSearch, 500)); 

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
    } else if (country.length >= 2 && country.length <= 10) {
        const markup = countriesList(country);
        // console.log(markup);
        refs.countriesMarkup.innerHTML = markup;
    } else if (country.length > 10) { 
        pushError('Сделайте более специфичный запрос. Слишком много совпадений!!');
        
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




