// reverse a string without bult in function

function reverseString(str) {
	var reverse = '';
	for (i = 0; i < str.length; i++) {
		var char = str[i];
		reverse = char + reverse;
	}
	return reverse;
}

var statement = 'Hello Bangladeshi!';

var forAlien = reverseString(statement);
console.log(forAlien);

// reverse a string with built in function
function reverseStr(str) {
	return str.split('').reverse().join('');
}

console.log(reverseStr(statement));
