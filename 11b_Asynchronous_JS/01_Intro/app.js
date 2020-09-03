let manufacturer;
let producttype;

const manufEl = document.querySelector('#manufacturer');
const producttypeEl = document.querySelector('#producttype');

manufEl.textContent = jukebox.puzzle;
producttypeEl.textContent = jukebox.statusMessage;

const request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', (evt) => {
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        manufacturer = JSON.parse(evt.target.responseText);
        manufEl.textContent = manufacturer;
        console.log(manufacturer);
    } else if (evt.target.readyState === 4) {
        console.log(`Error occured with status ${evt.target.status}`);
    }
});

//URL of the puzzle server with misspelling
request1.open('GET', 'http://localhost:3000/puzle');
request1.send();


const request2 = new XMLHttpRequest();
request2.addEventListener('readystatechange', (evt) => {
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        manufacturer = JSON.parse(evt.target.responseText);
        manufEl.textContent = manufacturer;
        console.log(manufacturer);
    } else if (evt.target.readyState === 4) {
        console.log(`Error occured with status ${evt.target.status}`);
    }
});

//URL of the puzzle server with misspelling
request2.open('GET', 'http://localhost:3000/puzle');
request2.send();


