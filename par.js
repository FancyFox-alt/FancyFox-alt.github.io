const TVH = 13;
 
function calculeCout(prix,quantite) { 
  return quantite * prix * ((TVH/100)+1);
} 
var p = parseFloat (prompt("Quel est le prix de l’article"));
var q = parseInt (prompt("Quel est le quantite d’article"));
var total = calculeCout(p,q);
aler(total.toFixed(2)+"$");
