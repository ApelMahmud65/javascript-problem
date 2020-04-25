
function getArraySum(numbers){
    var sum = numbers[0];
    for (i = 0; i <numbers.length; i++){
        var element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

var numbers = [22, 33, 21, 43, 55, 32];
var result = getArraySum(numbers);
console.log("The array summestion is: ", result);