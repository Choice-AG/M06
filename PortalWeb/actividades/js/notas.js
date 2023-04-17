const alumnos = [
  {
    nombre: "Pedro",
    apellido: "Medario",
    dni: "12345678A",
    notas: {
      trimestre1: [7, 8, 6, 9, 8],
      trimestre2: [6, 7, 5, 8, 7],
      trimestre3: [8, 9, 7, 9, 8],
    },
  },
  {
    nombre: "Alicia",
    apellido: "Tica",
    dni: "23456789B",
    notas: {
      trimestre1: [8, 9, 7, 9, 8],
      trimestre2: [7, 8, 6, 9, 8],
      trimestre3: [6, 7, 5, 8, 7],
    },
  },
  {
    nombre: "Paulin",
    apellido: "Becil",
    dni: "34567890C",
    notas: {
      trimestre1: [6, 7, 5, 8, 7],
      trimestre2: [8, 9, 7, 9, 8],
      trimestre3: [7, 8, 6, 9, 8],
    },
  },
  {
    nombre: "Ana",
    apellido: "Estesia",
    dni: "45678901D",
    notas: {
      trimestre1: [9, 8, 6, 9, 8],
      trimestre2: [6, 7, 5, 8, 7],
      trimestre3: [8, 9, 7, 9, 8],
    },
  },
  {
    nombre: "Mercedes",
    apellido: "Canso",
    dni: "56789012E",
    notas: {
      trimestre1: [7, 8, 6, 9, 8],
      trimestre2: [8, 9, 7, 9, 8],
      trimestre3: [6, 7, 5, 8, 7],
    },
  },
];

//listado de notas que ponga nombre apellido T1 T2 T3
let alumnosTabla = document.querySelector("#alumnosTabla");

//Método reduce
alumnos.forEach((alumnos) => {
  const row = document.createElement("tr");
  const celdaNombre = document.createElement("td");
  celdaNombre.textContent = alumnos.nombre;
  row.appendChild(celdaNombre);
  const celdaApellido = document.createElement("td");
  celdaApellido.textContent = alumnos.apellido;
  row.appendChild(celdaApellido);

  //Generar medias
  for (let i = 1; i <= 3; i++) {
    const celdaNotas = document.createElement("td");
    const notas = alumnos.notas[`trimestre${i}`];
    const promedio =
      notas.reduce((acc, nota) => acc + nota) / notas.length; 
      //REDUCE -> Método que utiliza dos parámetros de callback, acumulado 
    celdaNotas.textContent = promedio.toFixed(2);
    row.appendChild(celdaNotas);
  }
  alumnosTabla.appendChild(row);
});

/*
let codigo = "";

for (let i = 0; i < alumnos.length; i++) {
  codigo += `<tr>
                <td>${alumnos[i].nombre}</td>
                <td>${alumnos[i].apellido}</td>
                <td>${alumnos[i].notas.trimestre1}</td>
                <td>${alumnos[i].notas.trimestre2}</td>
                <td>${alumnos[i].notas.trimestre3}</td>
            </tr>`;
}

alumnosTabla.innerHTML = codigo;

function calcularPromedio(array) {
  let suma = 0;
  for (let i = 0; i < array.length; i++) {
    suma += array[i];
  }

  const promedio = suma / array.length;
  return promedio;
}
*/
