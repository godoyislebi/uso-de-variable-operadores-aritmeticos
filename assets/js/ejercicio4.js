/*Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día. */

let dias = parseInt(
    prompt("Ingrese un número de días para calcular años, semanas y días ")
  );
 

  let anio = 0 
  if (dias >=365) {
      anio = Math.floor(dias / 365)
      document.write("<p>El número de años es : ", anio + "</p>")
  }

  let semana = 0
  if ( dias >=7) {
      semana = Math.floor((dias -(365 * anio)) /7)
      document.write("<p>El número de semanas es : ", semana + "</p>")
  }

  let dia = 0
  if ( dias >=1) {
      dia =  Math.floor(dias -(365 * anio) - (7 * semana))
      document.write("<p>El número de días es : ", dia + "</p>")
  }