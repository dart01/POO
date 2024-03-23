// como NO copiar objetos en js 
const juanita = { // ORIGINAL
	age: 15,
	email: "juanita@juanita.com"
}

const nath = juanita; // COPIA
console.log(nath)

// Objeto original antes
console.log(juanita); // { age: 15, email: 'juanita@juanita.com' }

// Editamos sólo el objeto copia
nath.age = 20;
nath.email = "nath@email.com"
console.log(nath); // { age: 20, email: 'nath@email.com' }

// Objeto original después de editar el objeto copia:
console.log(juanita); // { age: 20, email: 'nath@email.com' }
