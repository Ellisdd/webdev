const getData = async () => {
    try {
        //Tehdään pyyntö HTTP GET (default on get jossei määritellä)
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(response);
        //muutetaan json muotoon
        const data = await response.json();
        console.log(data);
        console.log(data.value);
    } catch (error) {
        console.error('Virhe:', error);
    }
};

export {getData}