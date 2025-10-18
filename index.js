//index.js (branche dev)
console.log('Hello node');
//une fonction qui additionne deux variables a et  b ->a+b
function addition(a,b) {

return a+b; 
}

if(require.main==module) {

console.log("Resultat : ",addition(5,3));
}

module.exports={ addition };
