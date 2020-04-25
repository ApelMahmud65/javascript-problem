business = 450;
minister = 600;
shocib = 500;

/* var max = Math.max(business, minister, shocib);
console.log(max); */

if(business > minister){
    if (business > shocib){
        console.log("business is big");
    }
    else{
        console.log("shocib is big")
    }
}
else{
    console.log("minister is grater than all");
}