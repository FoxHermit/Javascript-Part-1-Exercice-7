// Je déclare la fonction ageValidator()
function ageValidator(){
  // Je stock dans la variable age la valeur du champs age
var age = document.getElementById('age').value;
  // Si l'age est strictement inférieur à 18
  // J'affiche une alert avec le message "Vous êtes mineur"
  // Sinon j'affiche "Vous êtes majeur"
if (age < 18){
  alert('Vous êtes mineur. Allez jouer à Minecraft.');
}else{
  alert('Vous êtes majeur. Mon doigt aussi.');
}
}
