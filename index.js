//index.js (branche dev)
console.log('Hello node');

function addition(a,b) {

return a+b; 
}

function soustraction(a,b){
return a-b;
}

if(require.main==module) {

console.log("Resultat : ",addition(5,3));
console.log("Resultat : ",soustraction(5,3));

}

module.exports={ addition,soustraction };
