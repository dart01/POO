const obj = {
	nombre: "diego",
	Apellido: "riaño",
	age:18,
	approvedCourses: ["curso1"],
	addCourse(newCourse){
		this.approvedCourses.push(newCourse);
	}
}
 obj.addCourse("curso 2")
console.log( obj.Apellido);
console.log(Object.keys(obj))//da los nombres ['nombre','apellido','edad']
console.log(Object.getOwnPropertyNames(obj))// DARIA EL MISMO RESULTADO QUE EL METODO KEYS
//console.log(Object.entries(obj))//['nombre', 'diego']['Apellido', 'riaño'] ['age', 18]
//console.log(Object.getOwnPropertyDescriptors(obj));//Esto nos devuelve un objeto con los atributos de nuestro objeto inicial

console.log(Object.entries(obj))
/*
Crear propiedades con accesibilidad editable
Existe un método estático del prototipo Object llamado defineProperty que no solo nos permite 
crear un atributo con su respectivo valor en un objeto, 
sino también nos da la posibilidad de definir las propiedades 
writable, enumerable y configurable a nuestro gusto. Estas propiedades son las
 que limitan el acceso y modificación en un objeto de JavaScript:
*/

Object.defineProperty(obj, "juego",{
	value: "adasd",
	writable: true,
	configurable: true,
});
console.log(Object.entries(obj))