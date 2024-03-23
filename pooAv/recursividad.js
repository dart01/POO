// // La recursividad es cuando una función se llama a
//  sí misma y esta genera una nueva ejecución de la función.
//   Esto sucede reiteradamente hasta que cumpla o no con 
//   cierta validación que nosotros declaremos para que 
//   deje de llamarse a sí misma en algún punto
// Función recursiva:
x=15;
function recursiva(numerito) { // Recive un número
	console.log(numerito); // Imprimimos en consola el número
	if (numerito < 10) { // Evalua si es menor a 5
		// Llamamos nuevamente a nuestra función enviandole el número siguiente:
		return recursiva(numerito + 1);
	} else { // La función deja de llamarse a sí misma:
	 	return x;
     }
}

recursiva(20)