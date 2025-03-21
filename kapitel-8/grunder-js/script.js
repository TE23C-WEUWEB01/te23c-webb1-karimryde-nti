// Här skriver js-kod
// var tal1 = parseInt(prompt("Skriv in ett heltal:"));
// var tal2 = parseInt(prompt("Skriv in ett till heltal:"));

// if (tal1 > tal2) {
//     document.writeln(`${tal1} är större än ${tal2}`);
// } else {
//     document.writeln(`${tal2} är större eller lika med ${tal1}`);
// }

// En liten inloggning, dvs fråga efter konto & lösenord och jämför med valbart lösenord
// Svara att "DU ... är inloggad" annars "Du ... har skrivit fel lösenord"
// while (true) {
//     var namn = prompt("Ange ditt namn:");
//     var lösenord = prompt("Ange ditt lösenord:");
//     if (lösenord == "12345") {
//         document.writeln(`DU ${namn} är inloggad`);
//         break;
//     } else {
//         document.writeln(`DU ${namn} har skrivit fel lösenord`);
//     }
// }

// Skriv ut talen 20-30
// for (let index = 20; index < 31; index++) {
//     document.writeln(`tal: ${index} <br>`);
// }

//let val = confirm("Klicka OK för att fortsätta!"); // true eller false
let val = true;
while (val) {
    val = confirm("Klicka OK för att fortsätta!"); // true eller false
}
