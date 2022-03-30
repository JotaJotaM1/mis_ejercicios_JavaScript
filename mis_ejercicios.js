const prompt = require("prompt-sync")({ sigint: true });

// 1) Convertidor de centimetros a pulgadas:

let conversion = (numero) =>{

    let pulgadas = 2.54

let centimetros = pulgadas * numero

return `${centimetros} ${"Este es el resultado en pulgadas"}`
}

let numCm = prompt("Dame una medida en centimentros ")

console.log(conversion(numCm))

// 2) Concatenacion:

let convertidorUrl = (url) => {

    url = "pepito"
         return `http://www.${url}.com.co` 
 }
console.log(convertidorUrl())

// 3) Frase con string mas !

let fraseConAdmiracion = (frase) =>{

     return `${"!"} ${frase.toUpperCase()} ${"¡"}`
 }

 let frase = prompt("Dame una frase ")

 console.log((fraseConAdmiracion(frase)))

// // 4) Crear una función que calcule la edad de los perros, considerando que 1 año
// para nosotros son 7 de ellos.

let CalEdadPerro= (numero) =>{

 let edadPerro = numero * 7

return `${edadPerro} ${"Años equivalen a su vida perruna"}`

}
let añosHumanos = prompt("Dame la edad de tu perro ")

console.log(CalEdadPerro(añosHumanos))

// 5) Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
// sueldo mensual como parámetro.
// PD: considerá que tu mes de trabajo tiene 192 horas.

let CalHoraTrabajo = (mensual) =>{
    
    let salarioMensual = mensual / prompt("Cuantas horas trabajas al mes ")

    let horaValor = salarioMensual

    return `${"Tu hora de trabajo cuesta "} ${horaValor}`
}

let Salario = prompt("Cuanto ganas al mes ? ")

console.log(CalHoraTrabajo(Salario))