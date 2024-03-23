const obj6 = {
	a: "a",
	b: "b",
	c: {
		d: "d",
		e: "e",
        f: "f"
	}
}

const stringifyedComplexObj = JSON.stringify(obj6);
const obj7 = JSON.parse(stringifyedComplexObj);

console.log(obj7);

obj7.c.f = "new f";
 console.log(obj6, obj7) 