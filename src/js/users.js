import { fetchData } from "./fetch.js";

const getUsers = async () => {

    const url ='http://localhost:3000/api/users';
    const users = await fetchData(url);

    if (users.error) {
        console.log('Tapahtui virhe fetch haussa!!');
        return
    }

    console.log(users);

    const tableBody = document.querySelector('.tbody');
    tableBody.innerHTML = ''; //tyhjennetään taulukko
    
    // TODO, myöhemmin järkevä erotella omaksi funktiokseen
    users.forEach((user) => {
        const row = document.createElement('tr');
    
        row.innerHTML = `
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td><button class="check" data-id="${user.id}">Info</button></td>
          <td><button class="del" data-id="${user.id}">Delete</button></td>
          <td>${user.id}</td>
        `;
    
        tableBody.appendChild(row);
    });
};

const addUsers = async (event) => {
    event.preventDefault();
    //  url
    const url ='http://localhost:3000/api/users';
    const users = await fetchData(url);

    //Haetaa formita tiedot
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#password').value.trim();
    const email = document.querySelector('#email').value.trim();


    const bodyData = {
        username: username,
        password: password,
        email: email,
    };

    // options, eli mikä metodi ja headers ja JSON
    const options = {
        body: JSON.stringify(bodyData),
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
      };
      console.log(options);
    
      const response = await fetchData(url, options);
      
    if (users.error) {
        console.log('Tapahtui virhe fetch haussa!!');
        return;
    }

    if (response.message) {
        alert(response.message);
    }

    console.log(response);
    // document.querySelector('.addForm').reset();
    getUsers();

    // const tableBody = document.querySelector('.tbody');
    // tableBody.innerHTML = ''; //tyhjennetään taulukko
};
//TODO
// teek funktio joka hakee yksittäisen userin tiedot
//käytä get api user id

export {getUsers, addUsers}