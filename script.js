let firstName = prompt("Quel est ton prénom ?")
let hour = prompt("Quelle heure est-il ?")
function sayHello(name,hour) {   
  if (hour >= 18 && hour <= 24 || hour >= 0 && hour <= 4 )
  {
    document.querySelector('p').innerText = "Bonsoir " + name + " !"
   }
  else {
    document.querySelector('p').innerText = "Bonjour " + name + " !"
   }    
}
sayHello(firstName,hour)
