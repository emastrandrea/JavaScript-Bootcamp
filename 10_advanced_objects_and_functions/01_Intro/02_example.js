import Person from './person';
/*
Lösung:
Eine Vorlage (template, blueprint) um Objekte zu erzeugen.
 */

let person1 = new Person("Hans", "Muster", "männlich", "1973-11-30");
//Ausgabe des vollen Namens auf der Console
console.log(person1.getFullName());

let person2 = new Person("Anna", "Muster", "weiblich", "2002-03-01");
console.log(person2.getFullName());
console.log(person2.fullName);
person2.fullName = 'Anna Meier';
console.log(person2.fullName);

//Array (Liste) aus Personen ?
let personArray = [];
personArray.push(new Person("Hans", "Müller", "männlich", "1973-11-30"));
personArray.push(new Person("Anna", "Müller", "weiblich", "2002-03-01"));
personArray.push(new Person("Greta", "Thunberg", "weiblich", "2002-03-01"));

//console.log(personArray);
//console.log(personArray.filter((person) => person.geschlecht === "männlich"));
console.log(personArray.filter((person) => person.geschlecht === "weiblich"));


