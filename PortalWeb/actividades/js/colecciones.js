// MAP: Iterar a través de los elementos dentro de una colección de arrays de js. (Como un bucle de un elemento a otro en una lista, maneteniendo orden y posición.)

const alumnos = [
  {
    id: 1,
    nombre: "Alvaro",
    lenguajes: ["Javascript", "PHP", "Flutter"],
  },
  { id: 2, nombre: "Goizane", lenguajes: [".NET", "PHP", "VUE"] },
  { id: 3, nombre: "Haku", lenguajes: ["Java", "Dart", "Flutter"] },
];

//Forma 1
for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i].nombre);
}

//Forma 2
for (let alumno of alumnos) {
  console.log(alumno.nombre);
}

//Forma 3
alumnos.forEach((alumno) => {
  console.log(alumno.nombre);
});

//Forma 4
alumnos.map((alumno) => {
  console.log(alumno.nombre);
});

const nombres = alumnos.map((alumno) => alumno.nombre);
console.log(nombres);

//SET
//Es una colección de elementos únicos. No se pueden repetir elementos.
//Se utiliza para eliminar elementos duplicados de un array.

let ejemploSet = new Set();
ejemploSet.add("Green");
ejemploSet.add("Violet");
ejemploSet.add("Red");
ejemploSet.add("Red"); // No se añade porque ya hay un Red
ejemploSet.add("Blue");
ejemploSet.add("Yellow");

console.log(ejemploSet);

//Métodos de arrays
//Filter: Filtra los elementos de un array en función de una condición.
//Map: Itera a través de los elementos de un array y devuelve un nuevo array con los resultados.
//Find: Devuelve el primer elemento de un array que cumpla una condición.
//FindIndex: Devuelve el índice del primer elemento de un array que cumpla una condición.
//Sort: Ordena los elementos de un array en función de una condición.
//Concat: Une dos o más arrays.
//Join: Une todos los elementos de un array en un string.
//Slice: Extrae una sección de un array y devuelve un nuevo array.
//Splice: Extrae una sección de un array y la elimina del array original.
//Push: Añade uno o más elementos al final de un array y devuelve la nueva longitud.
//Pop: Elimina el último elemento de un array y devuelve ese elemento.
//Shift: Elimina el primer elemento de un array y devuelve ese elemento.
//Unshift: Añade uno o más elementos al principio de un array y devuelve la nueva longitud.
//IndexOf: Devuelve el índice del primer elemento de un array que coincida con un valor.
//LastIndexOf: Devuelve el índice del último elemento de un array que coincida con un valor.
//Reverse: Invierte el orden de los elementos de un array.
//Every: Comprueba si todos los elementos de un array cumplen una condición.
//Some: Comprueba si alguno de los elementos de un array cumple una condición.
//Reduce: Reduce todos los elementos de un array a un único valor.
//Includes: Comprueba si un array contiene un valor.

//FIND
console.log(alumnos.find((alumno) => alumno.nombre == "Alvaro"));
console.log(alumnos.find((alumno) => alumno.id));

//SOME
console.log(alumnos.some((alumno) => alumno.nombre == "Alvaro"));
console.log(alumnos.some((alumno) => alumno.id == 4));
console.log(
  alumnos.some((alumno) => alumno.lenguajes.includes("Javascript"))
);
console.log(
  alumnos.some((alumno) => alumno.lenguajes.includes("React"))
);

//FILTER
//Todos los alumnos que saben javascipt
const alumnosjs = alumnos.filter((alumnos) => alumnos.lenguajes.includes("Javascript"));
for (alumnojs of alumnosjs) {
  console.log(alumnojs.nombre)
}

//SPREAD OPERATOR (...)
//Es una forma de copiar un array en otro array, sin que se modifique el original.

function sumar(a, b, c) {
  return a + b + c;
}

const numeros = [2, 4, 6];
const resultado = sumar(...numeros);
console.log(resultado);

