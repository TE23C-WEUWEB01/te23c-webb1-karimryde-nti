// alert("Glädjens dag, det är fredag!");
// var namn = prompt("Vad heter du?");
// var ålder = prompt("Hur gammal är du?");
// alert ("Hej, " + namn + " du är " + ålder + " gammal");
// console.log("Det verkar funka det här!");

// Be användaren mata in 2 tal och skriv summan
// var tal1String = prompt("Skriv ett tal"); // Läser som en string
// var tal2String = prompt("Skriv ett tal"); // Läser som en string
// var summa = parseInt(tal1String) + parseInt(tal2String);
// alert("Summan är " + summa);

// Be användaren mata sin ålder 
// Och skriv ut ålder på studenden
//var ålder = prompt("Skriv din ålder");
//var studentÅlder = parseInt(ålder) + 1;
// alert("Du är " + studentÅlder + " när du tar studenten!");
//document.writeln("<h2>Du är " + studentÅlder + " när du tar studenten!</h2>");

// Spamcheck 
// Fråga användaren vad slumpad "summa"
var slumptal1 = Math.round(Math.random() * 100);
var slumptal2 = Math.round(Math.random() * 100);
var summa = slumptal1 + slumptal2;
console.log(slumptal1, slumptal2);

var gissning = prompt("Vad är summan av " + slumptal1 + " + " + slumptal2 + " ?" );
if (gissning == summa) {
    document.writeln("<h1>Good job! 😁</h1>");
} else {
    document.writeln("<h1>Sucker! 😢</h1>");
}