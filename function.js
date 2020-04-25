function evenify(num) {
    if(num % 2 == 0){
        console.log(num + ': is even number');
        
    }
    else{
        console.log(num*2 + ': is odd number');
    }
}


var arr = [3, 5, 7, 4, 6, 8, 9, 10];

for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    evenify(num)
}

friends_age = [22, 32, 11, 52, 23, 54, 61]

for (let i = 0; i < friends_age.length; i++) {
    const age = friends_age[i];
    evenify(age);
}