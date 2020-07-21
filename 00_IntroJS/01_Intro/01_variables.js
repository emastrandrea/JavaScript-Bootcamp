/*
Beispiel 1 - Variable mit Zeichenkette
 */

let city = 'Zürich';
const country = 'Schweiz';
let location = city + ', ' + country;
console.log(location);

//neue Stadt
city = "Bern";
location = city + ', ' + country;
console.log(location);


//neues Land und neue Stadt
city = "Roma";
//country = "Italia"; //TypeError: Assignment to constant variable.
const country2 = "Italia";
location = city + ', ' + country2;
console.log(location);
