"use strict";

// PROMISES
const myPromise = new Promise((resolve, reject) => {
    const rand = Math.floor(Math.random() * 2);
    if(rand ==0){
        resolve();
    }
    else{
        reject();
    };
});

myPromise
    .then(() => console.log('Success'))
    .catch(() => console.error('Something went wrong'))


// FETCH WITH PROMISES 
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));


// ASYNC AWAIT

