/*
Thema: Variablen und Konstanten mit Zeichenketten (Strings)

Wichtig, wenn Werte einer Variable zugewiesen werden:
Das '='-Zeichen ist ein Zuweisung-Operator und
nicht ein mathematisches Gleichheitszeichen!!!
 */

/*
Beispiel 1 - Stadt und Land ausgeben
 */
let city = 'Zürich';
const country = 'Schweiz';
console.log(city);
console.log(country);

//Verbindung von zwei Strings
let location = city + ', ' + country;
console.log(location);

//neue Stadt setzen
city = "Bern";
location = city + ', ' + country;
console.log(location);


//neues Land und neue Stadt
city = "Roma";
//country = "Italia"; //TypeError: Assignment to constant variable.
const country2 = "Italia";
location = city + ', ' + country2;
console.log(location);

//Datentyp mit typeof überprüfen
console.log(typeof city == 'string');

