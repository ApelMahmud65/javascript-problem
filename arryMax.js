
var number = [2,4,5,2,4,3,54,8,55,87,33,22];
var max = [0];
for(var i = 0; i < number.length; i++){
    var element = number[i];
    if(element > max) {
        max = element;
    }
}
console.log(max);


var marks = [33, 22, 21, 87, 98, 32, 32];
//console.log(Math.max(...marks));

var numbers = [33,44, 23, 21];
var maxValue = Math.max.apply(null, numbers);
//console.log(maxValue);

