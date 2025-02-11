import '../css/style.css';
import '../css/snackbar.css';
import { getItems } from './items.js';
import { getData } from './test.js';
import { getUsers, addUsers } from './users.js';
import { fetchData } from './fetch.js';
import { getEntries} from './entries.js';

document.querySelector('#app').innerHTML = 'Moi tässä oman APIn harjoituksia';

console.log('Moro, tästä alkaa scriptit');


// function synchronousFunction() {
//     let number = 1;
//     for(let i = 1; i < 10000; i++){
//       number += i;
//       console.log('synchronousFunction running');
//     }
//     console.log('regular function complete', number);
//   }

//   function synchronousFunction2() {
//     console.log('What took you so long???');
//   }


// //   synchronousFunction();
// //   synchronousFunction2();


// // Tehdään http pyyntö
// fetch('https://api.restful-api.dev/objects')
// 	.then((response) => {
//         console.log(response);
// 		if (!response.ok) {
// 			throw new Error('Verkkovastaus ei ollut kunnossa');
// 		}
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.error('Fetch-operaatiossa ilmeni ongelma:', error);
// 	});

//     // Tehdään modernimpi tapa hakea rajapintakkutsuja

//     // async function getData() {
// // const getData = async () => {
// //     try {
// //         //Tehdään pyyntö HTTP GET (default on get jossei määritellä)
// //         const response = await fetch('https://api.chucknorris.io/jokes/random');
// //         console.log(response);
// //         //muutetaan json muotoon
// //         const data = await response.json();
// //         console.log(data);
// //         console.log(data.value);
// //     } catch (error) {
// //         console.error('Virhe:', error);
// //     }
// // };
    
// getData();   

// // TODO: tehkää getData funktiosta oma test.js tiedosto

// // haetaan GET all items nappija tehdään rajapintahaku
const getItemsBtn = document.querySelector('.get_items');
getItemsBtn.addEventListener('click', getItems);

const getUserBtn = document.querySelector('.get_users');
getUserBtn.addEventListener('click', getUsers);

const addUserForm = document.querySelector('.formpost');
addUserForm.addEventListener('click', addUsers);

const getEntriesBtn = document.querySelector('.get_entries');
getEntriesBtn.addEventListener('click', getEntries);