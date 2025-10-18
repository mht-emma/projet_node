//index.js (branche dev)
console.log('Hello node');
// index.js (bugfix) – rendre addition plus robuste 

//modif depuis bugfix
//n

function addition(a, b) { 
const x = Number(a), y = Number(b); 
if (Number.isNaN(x) || Number.isNaN(y)) return 0; 
return x + y; 
} 

//Est ce que c'ees passé

if(require.main==module) {

console.log("Resultat addition : ",addition(5,3));
console.log("Resultat  soustraction : ",soustraction(5,3));

}

module.exports={ addition,soustraction };
