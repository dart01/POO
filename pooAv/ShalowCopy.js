
//Shallow copy

const obj2 = {
	a: "a",
	b: "b"
};

const obj3 = {};

for (propiedad in obj2){
	obj3[propiedad] = obj2[propiedad];
}

console.log(obj3);

//El Object.assign nos permite realizar
// el mismo shallow copy que podemos hacer con el bucle for.
const obj4 = {
	a: "a",
	b: "b",
	c: {
		d: "d",
		e: "e"
	}
}
const obj5 = Object.assign({}, obj4);

console.log(obj5);
// Sin embargo, si hacemos modificaciones en los nested objects...
obj5.c.d = "COPIA DESDE EL OBJ4";

// se verán afectados los demás objetos copiados
console.log(obj4); // { a: 'a', b: 'b', c: { d: 'COPIA DESDE EL OBJ1', e: 'e' } }