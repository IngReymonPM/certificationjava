// This is an in-line comment.
/* This is a
multi-line comment */
var myName;
// Configuración
var a;
// instrucciones a debe ser igual a 5.
// Aprobado:b debe ser igual a -6.
// Aprobado:c debe ser igual a 2.
// Aprobado:Debes usar el operador -= para cada variable.
// Aprobado:No debes modificar el código sobre el comentario especificado.
// Cambia solo el código debajo de esta línea
var a = 7;
let a = 11;
let b = 9;
let c = 3;

// Cambia solo el código debajo de esta línea
a = a -= 6;
b = b -= 15;
c = c -= 1;
//a debe ser igual a 25.
//Aprobado:b debe ser igual a 36.
//Aprobado:c debe ser igual a 46.
//Aprobado:Debes usar el operador *= para cada variable.
//Aprobado:No debes modificar el código sobre el comentario especificado.
let a = 5;
let b = 12;
let c = 4.6;

// Cambia solo el código debajo de esta línea
a *= 5;
b *= 3;
c *= 10;
//Aprobado:a debe ser igual a 4.
//Aprobado:b debe ser igual a 27.
//Aprobado:c debe ser igual a 3.
//Aprobado:Debes usar el operador /= para cada variable.
//Aprobado:No debes modificar el código sobre el comentario especificado.
let a = 48;
let b = 108;
let c = 33;

// Cambia solo el código debajo de esta línea
a /= 12;
b /=  4;
c /=  11;
//Debes usar dos comillas dobles (") y cuatro comillas dobles escapadas (\").
//Aprobado:La variable myStr debe contener la cadena: I am a "double quoted" string inside "double quotes".
let myStr = "I am a \"double quoted\" string inside \"double quotes\".";
// myStr Debe tener un solo carácter de espacio entre las dos cadenas.
// Aprobado:myStr debe tener un valor de la cadena This is the start. This is the end.
// Aprobado:Deberías usar el operador + para construir myStr.
// Aprobado:myStr Debe crearse una variable con la palabra reservada const.
// Aprobado:Debes asignar el resultado a la variable myStr.
const myStr =  "This is the start." + " This is the end."; // Change this line-*
// myStr Debe tener un solo carácter de espacio entre las dos cadenas.
// Aprobado:myStr Debe tener un valor de la cadena This is the first sentence. This is the second sentence.
// Aprobado:Deberías usar el operador += para construir myStr.
let myStr;
myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
// myName debe establecerse en una cadena de al menos 3 caracteres de largo.
// Aprobado:Debes usar dos operadores + para construir myStr con myName dentro de él.
// Cambia solo el código debajo de esta línea
const myName = "soy reymon pacheco";
const myStr = "i am groot" + myName + " flack";
// Aprobado:someAdjective debe ser establecido a una cadena de al menos 3 caracteres.
// Aprobado:Debes añadir someAdjective a myStr usando el operador +=.
// Cambia el código debajo de esta línea
const someAdjective = "i am grood";
let myStr = "Learning to code is " ;
myStr += someAdjective;

// Configuración
let lastNameLength = 0;
const lastName = "Lovelace";
//No debes cambiar las declaraciones de variables en la sección // Setup.
//Aprobado:lastNameLength debe ser igual a ocho.
//Aprobado:Debes obtener la longitud de lastName usando .length de esta forma: lastName.length.
// Cambia solo el código debajo de esta línea
lastNameLength = lastName.length;

// Configuración
let firstLetterOfLastName = "";
const lastName = "Lovelace";
//Aprobado:La variable firstLetterOfLastName debe tener el valor de L.
//Aprobado:Debes usar la notación de corchetes.
// Cambia solo el código debajo de esta línea
firstLetterOfLastName = lastName[0];
// Aprobado:myStr debe tener una cadena con valor Hello World.
// Aprobado:No debes cambiar el código por encima del comentario especificado.
// Configuración
let myStr = "Jello World";

// Cambia solo el código debajo de esta línea
myStr = "Hello World"; // Cambia esta línea
// Cambia solo el código encima de esta línea

// Configuración
const lastName = "Lovelace";
//La variable thirdLetterOfLastName debe tener el valor de v.
//Aprobado:Debes usar la notación de corchete
// Cambia solo el código debajo de esta línea
const thirdLetterOfLastName = lastName[2]; // Cambia esta línea
//Aprobado:lastLetterOfLastName debe ser la letra e.
//Aprobado:Debes usar .length para obtener la última letra.
// Configuración
const lastName = "Lovelace";

// Cambia solo el código debajo de esta línea
const lastLetterOfLastName = lastName[lastName.length - 1]; // Cambia esta línea



// secondToLastLetterOfLastName debe ser la letra c.
// Aprobado:Debes usar .length para obtener la penúltima letra.
// Cambia solo el código debajo de esta línea
// Configuración
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Cambia esta línea

// wordBlanks debe ser una cadena.
// Aprobado:No debes cambiar los valores asignados a myNoun, myVerb, myAdjective o myAdverb.
// Aprobado:No debes utilizar directamente los valores dog, ran, big o quickly para crear wordBlanks.
// Aprobado:wordBlanks debes contener todas las palabras asignadas a las variables myNoun, myVerb, myAdjective y myAdverb separadas por caracteres no-palabra (y cualquier palabra adicional de su elección).
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Cambia solo el código debajo de esta línea
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";
 // Cambia esta línea
// Cambia solo el código encima de esta línea


//arreglos en Javascript 
console.log(numeros);   // [1, 2, 3, 4, 5]
console.log(palabras);   // ["Hola", "Mundo", "JavaScript"]
console.log(mezclado);   // [1, "dos", true, [1, 2, 3]]

//Aprobado:myArray debe ser un arreglo.
//Aprobado:El primer elemento en myArray debe ser una cadena.
//Aprobado:El segundo elemento en myArray debe ser un número.
// Cambia solo el código debajo de esta línea
const myArray = ["myArray", 48];
-----------------------------------
 // Cambia solo el código debajo de esta línea
//myArray debe tener al menos un arreglo anidado dentro de otro arreglo.
const myArray = [[1,2]];
//Aprobado:La variable myData debe ser igual al primer valor de myArray.
//Aprobado:Los datos en la variable myArray deben ser accedidos utilizando notación de corchetes.
const myArray = [50, 60, 70];
let myData = myArray[0];
console.log(myData);
//Aprobado:myArray ahora debe ser [45, 64, 99].
//Aprobado:Debes usar el índice correcto para modificar el valor en myArray.
// Configuración
const myArray = [18, 64, 99];

// Cambia solo el código debajo de esta línea
myArray[0] = 45, 64, 99;
------------------------------------------------------
//myData debe ser igual a 8.
//Aprobado:Debes usar notación de corchetes para leer el valor correcto de myArray.
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
console.log(myData);

//myArray debe ser igual a [["John", 23], ["cat", 2], ["dog", 3]].
// Configuración
const myArray = [["John", 23], ["cat", 2]];

// Cambia solo el código debajo de esta línea
myArray.push(["dog", 3]);

