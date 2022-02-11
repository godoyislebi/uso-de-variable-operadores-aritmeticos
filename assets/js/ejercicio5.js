/*  Crear un programa que solicite al usuario 5 números y realice los cálculos que se
piden a continuación.
● La suma de todos los números.
● El promedio de los 5 números ingresados. */

let a = parseInt(prompt("Ingrese el primer número:"))
let b = parseInt(prompt("Ingrese el segundo número:"))
let c = parseInt(prompt("Ingrese el tercer número:"))
let d = parseInt(prompt("Ingrese el cuarto número:"))
let e = parseInt(prompt("Ingrese el quinto número:"))

let suma = a + b + c + d + e
let promedio = (a + b + c + d + e) / 5

document.write("<p>Los números ingresados fueron:" + " " + a + ", " + b + ", " + c + ", " + d + " " + "y" + " " + e + "</p>")
document.write("<p>La Suma de los cinco números es:" + " " + suma + "</p>")
document.write("<p> El promedio de los cinco números es:" + " " + promedio + "</p>")