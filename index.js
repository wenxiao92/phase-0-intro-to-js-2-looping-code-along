const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names, param2 = "birthday") {
const newArray = []; //empty array
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${param2} gift!`); 


  }
    return newArray;  
}


let number = 10;
function countDown(number) {
    for (let i = 0; i <= number; number--) {
        console.log(number);
    }
}