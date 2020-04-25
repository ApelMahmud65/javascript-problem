var numbers = [2, 5, 2, 4, 5, 3, 6, 8, 9, 33, 8, 88];
var uniqueNumber = [];
for(i = 0; i <numbers.length; i++){
    var element = numbers[i];
    var index = uniqueNumber.indexOf(element);
    if(index == -1){
        uniqueNumber.push(element);
    }
}

console.log(uniqueNumber);



//using string

var name = ["arif", "mojid", "arif", "div"];
var uniqueName = [];
for(i = 0; i <name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index== -1){
        uniqueName.push(element);
    }
}
//console.log(uniqueName);

function add(a,b){
    return a + b;
}
add("adam" + "eve");

console.log(function)
