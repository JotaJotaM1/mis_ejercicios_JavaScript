const prompt = require("prompt-sync")({ sigint: true });

////===== BUBBLE SORT CON ARRAY DE OBJETOS Y REPASO ANTES DEL FINAL =====////

// CREAR UNA FUNCION PARA ORDENAR LAS EDADES DE FORMA ASCENDENTE(Acendente: a, z(menor a mayor) Decendente: z,a (mayor a menor)) Y LOS RETORNE

// const edades = [33, 27, 34, 30, 34, 25];

// let ordenarNumeros = (arr) => {
//   let temporal;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temporal = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temporal;
//       }
//     }
//   }
//   return arr
// };

// console.log(edades);
// (ordenarNumeros(edades);
// console.log(edades)

/////////////////////////////////////////////////////////////////////////////////////

// CREAR UNA FUNCION PARA ORDENAR DE MANERA ALFABETICA(Acendente: a, z(menor a mayor) Decendente: z,a (mayor a menor)) UNA ARRAY DE STRING

// const palabras = ["Sara","Juan","Fernando","Roberta","Adriana"]

// let ordenarNumeros = (arr) => {
//   let temporal;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         temporal = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temporal;
//       }
//     }
//   }
//   return arr
// };

// console.log(palabras);
// ordenarNumeros(palabras);
// console.log(palabras);

/////////////////////////////////////////////////////////////////////////////////////

// CREAR UNA FUNCION PARA ORDENAR UN ARREGLO QUE TIENE OBJETOS

// const arrayCuentas = [
//   {
//     titular: "Arlene Barr",
//     estaHabilitada: false,
//     saldo: 3253.4,
//     edadTitular: 33,
//     tipoCuenta: "sueldo",
//   },
//   {
//     titular: "Roslyn Torres",
//     estaHabilitada: false,
//     saldo: 3229.45,
//     edadTitular: 27,
//     tipoCuenta: "sueldo",
//   },
//   {
//     titular: "Cleo Lopez",
//     estaHabilitada: true,
//     saldo: 1360.19,
//     edadTitular: 34,
//     tipoCuenta: "corriente",
//   },
// ];

// let ordenarObjeto = (arr) => {
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j].edadTitular > arr[j + 1].edadTitular) {
//         temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }

//   return arr;
// };

// //Si nos piden que retornemos esta es la forma correcta de realizarlo
// console.log(arrayCuentas);
// let arrayOrdenadoPorTitular = ordenarObjeto(arrayCuentas);
// console.log(arrayOrdenadoPorTitular);

/////////////////////////////////////////////////////////////////////////////////////

//////============MATRIZ============//////

// 3 x 3 CREAR UNA FUNCION QUE RETORNE LA SUMATORIA DE LA FILA EN LA POSICION 2

let matriz = [
  [12, 5, 11],
  [15, 3, 7],
  [1, 22, 8],
];
let sumaFila2 = (arr) => {
  let resultado = 0;

  // CUANDO RECORRO UNA FILA LE PIDO LA LONGITUD A ESA FILA Y EN ESTE CASO LA FILA VA A ESTAR ESTATICA LO QUE ITERA ES LA COLUMNA

  for (let i = 0; i < arr[2].length; i++) {
    resultado += arr[2][i];
  }

  return resultado;
};

let resultadoFila1 = sumaFila2(matriz);
console.log(resultadoFila1);
