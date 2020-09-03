let data1;
let category;

const manufURL =

const manufEl = document.querySelector('#data1');
const categoryEl = document.querySelector('#category');

/*manufEl.textContent = jukebox.puzzle;
categoryEl.textContent = jukebox.statusMessage;*/

const request1 = new XMLHttpRequest();
request1.addEventListener('readystatechange', (evt) => {
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        data1 = JSON.parse(evt.target.responseText);
        manufEl.textContent = data1;
        console.log(data1);
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
        data1 = JSON.parse(evt.target.responseText);
        manufEl.textContent = data1;
        console.log(data1);
    } else if (evt.target.readyState === 4) {
        console.log(`Error occured with status ${evt.target.status}`);
    }
});

//URL of the puzzle server with misspelling
request2.open('GET', 'http://localhost:3000/puzle');
request2.send();


