/* Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
que la transforme a grados Kelvin y Fahrenheit. */

var celsuis = parseInt(prompt("Ingrese un número que represente la temperatura en grados celsuis:"))
const kelvin = 273.15 + celsuis
const farenheit = (celsuis * 9/5) + 32
console.log(celsuis)
console.log(kelvin)
console.log(farenheit)
if (isNaN(celsuis) || celsius == "" || celsius == null) {
    prompt("Ingrese un número que represente la temperatura en grados celsuis:")
}else{
    document.write("<p>El equivalente a temperatura Kelvin es: " + kelvin + "</p>");
    document.write("<p>El equivalente a grados Farenheit es: " + farenheit + "</p>");
}

