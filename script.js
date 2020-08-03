// Notification Hide
document.getElementById("pin-unmatched").style.display = "none";
document.getElementById("pin-matched").style.display = "none";

// Random Number Generator
function randomNumber() { 
    var min = 100000; 
    var max = 999999; 
    var generateNumber =  Math.round(Math.random() * (max - min + 1)) + min; 

    document.getElementById("random-number").value  = generateNumber;
} 

