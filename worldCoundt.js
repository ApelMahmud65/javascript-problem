var speech = "I am Apel mahmud and i read in class five";
var count = 0;

for(i = 0; i <speech.length; i++){
    var char = speech[i];
   if(char == " " && speech[i-1] != " "){
       count++;
   }
}
count++;
console.log(count);