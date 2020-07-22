/*
Thema: Variablen, Zahlen
 */

/*
Beispiel 1 - Umwandlung eines Menschenalters in Hundejahre
 */

let age = 26;
let dogYears = (age + 1) / 7;

console.log(dogYears);
console.log(`Hundejahre sind: ${dogYears}`);


/*
Beispiel 2 - Umwandlung von fahrenheit (USA) in Celcius und Kelvin
 */

const fahrenheit = 50; // 0c - 273.15k
//Formel Celcius
let celsius = (fahrenheit - 32) * 5 / 9;
//Formel Celcius
let kelvin = (fahrenheit + 459.67) * 5 / 9;

console.log(`${celsius}°F entspricht ${celsius}°C und ${kelvin}°K`);
