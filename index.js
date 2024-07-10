const names = ["Guadalupe", "Ollie", "Aki"];
let myArray = []
function writeCards(names){
  let messages =[] ;
 for(let i=0;i<names.length;i++){
  let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
  messages.push(message);
debugger;
}
return messages; 
}
myArray =writeCards(names);
console.log(myArray)

function countdown (){
  let i=10 ; 
  while(i>0 ){console.log(i--)}
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  
  }
}

countDown(10);
