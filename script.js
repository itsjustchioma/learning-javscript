'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = ''){
    const html = `
    <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} million</p>
      <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
    </div>
  </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}
// ///////////////////////////////////////
// const getCountryAndNeighbor = function(country){
//     // AJAX CALL COUNTRY 1
//     const request = new XMLHttpRequest();
//     // GET DATA
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    
//     // SEND THE REQUEST
//     request.send();
    
//     // REGISTER A CALLBACK FUNCTION ON THE REQUEST OBJECT FOR THE LOAD EVENT
//     request.addEventListener('load', function(){
//         // CONVERT JSON CODE TO A JAVASCRIPT OBJECT 
//         const [data]= JSON.parse(this.responseText);
    
//         // ([data] is being destructured because it was an array that had an object in it, so now its just an object containing all the information)
    
//         console.log(data);
    
//         // RENDER COUNTRY 1
//         renderCountry(data); 
        
//         // GET NEIGHBOR COUNTRY 2
//         const [neighbour] = data.borders;

//         if(!neighbour) return;

//         // AJAX CALL COUNTRY 2
//         const request2 = new XMLHttpRequest();
//         // GET DATA
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        
//         // SEND THE REQUEST
//         request2.send();

//         request2.addEventListener('load', function(){
//           const data2 = JSON.parse(this.responseText);
//           console.log(data2);

//           renderCountry(data2, 'neighbour');
//         })
//     });
// };

// getCountryAndNeighbor('nigeria');

// setTimeout(() =>{
//   console.log('1 second passed');
// }, 1000)


// USING FETCH API
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(request);

// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(
//     function(response){
//       console.log(response);
//       return response.json(); // .json() is an asynchronous method, so it will also return a promsie 
//   }).then(
//     function(data){
//       console.log(data);
//       renderCountry(data[0])
//   })
// };
// getCountryData('portugal');

const getCountryData = function(country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(response => response.json())
  .then(data => renderCountry(data[0]));
};
      
getCountryData('portugal');