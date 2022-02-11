/*  Realizar operaciones con dos números.
Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
números, calcular lo siguiente:
● Suma
● Resta
● División
● Multiplicación
● Módulo  */

let number1 = null
let number2 = null

do{
    number1 = parseInt(prompt("Ingrese un número:"))
    number2 = parseInt(prompt("Ingrese otro número distinto al anterior:"))
    console.log(number1, number2)
    document.write ("<h1>Operaciones matemáticas con dos números ingresados por una persona usuaria</h1><br>")
    document.write ("<p> La suma de los números ingresados es: " + (number1 + number2) + "</p><br>");
    document.write ("<p>La resta de los números ingresados es: " + (number1 - number2) + "</p><br> ");
    document.write ("<p>La multiplicación de los números ingresados es: " + (number1 * number2) + "</p><br>")
    document.write ("<p>La división de los números ingresados es: " + (number1 / number2) + "</p><br>")
    document.write ("<p>El resto de los números ingresados es: " + (number1 % number2) + "</p><br>")
}while (number1 === number2 || number1 === 0 || number2 === 0 || isNaN(number1)  || isNaN(number2));