/*
Thema: Asynchrone Verarbeitung im Web
 */
/*
Beispiel 1: Anstossen des TodoList-Service.

Origin Server: http://localhost:63342
CORS Request to the puzzel server (http://localhost:3000)

Wichtig: Programm wird im Client verarbeitet.

Doc: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
*/

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (evt) => {
    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    //Wenn erledigt ...
    if (evt.target.readyState === 4 && evt.target.status === 200) {
        //dann tue ...
        const data = JSON.parse(evt.target.responseText);
        console.log(data);
    }
});

//URL of the puzzle server
//https://jsonplaceholder.typicode.com/todos/
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
request.send();
