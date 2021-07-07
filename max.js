business = 450;
minister = 600;
shocib = 500;

/* var max = Math.max(business, minister, shocib);
console.log(max); */

if (business > minister) {
	if (business > shocib) {
		console.log('business is big');
	} else {
		console.log('shocib is big');
	}
} else {
	console.log('minister is grater than all');
}

// how to check max with maultiple condition
const father = 20007;
const mother = 2349;
const me = 3048;

if (father > mother && father > me) {
	console.log('Father is big');
} else if (mother > father && mother > me) {
	console.log('Mother is big');
} else {
	console.log('I am is big');
}
