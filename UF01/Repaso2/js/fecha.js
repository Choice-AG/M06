let ahora = new Date();
console.log(ahora)
//meses como array empieza en 0
let mesesbis=new Array('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', "Octubre", 'Noviembre', 'Diciembre')
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//Date(año,mes,dia,hora,minuto,segundo,milisegundo)
let finDeAnyo = new Date(2022,11,31,23,59,59,999);
console.log(finDeAnyo);
let diaSemana=new Array('Domingo','Lúnes','Martes','Miércoles','Jueves','Viernes','Sábado');
//let diaSemana=new Array('Diumenge','Dilluns','Dimarts','Dimecres','Dijous','Divendres','Disabte');
console.log(mesesbis[ahora.getMonth()]);
console.log(diaSemana[ahora.getDay()]);

console.log(ahora.getDate());
console.log(finDeAnyo - ahora);