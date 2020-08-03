// Notification Hide
document.getElementById("pin-mismatched").style.display = "none";
document.getElementById("pin-matched").style.display = "none";
document.getElementById("try-left").style.display = "none";

// Random Number Generator
function randomNumber() {
    var min = 1000;
    var max = 9999;
    var generateNumber = Math.round(Math.random() * (max - min + 1)) + min;

    document.getElementById("generate-number").value = generateNumber;
}

// Submit Pin
function submitPin() {
    var generatePin = document.getElementById("generate-number").value;
    var inputPin = document.getElementById("input-pin").value;

    if (generatePin == "" && inputPin == "") {
        alert('Please Generate Pin First');
        document.getElementById("pin-mismatched").style.display = "none";
        document.getElementById("pin-matched").style.display = "none";
        document.getElementById("try-left").style.display = "none";
    }
    else if (generatePin == "") {
        alert('Please Generate Pin First');
        document.getElementById("pin-mismatched").style.display = "none";
        document.getElementById("pin-matched").style.display = "none";
        document.getElementById("try-left").style.display = "none";
    }
     else if (inputPin == generatePin) {
        document.getElementById("pin-matched").style.display = "block";
        document.getElementById("pin-mismatched").style.display = "none";
        document.getElementById("try-left").style.display = "none";
        document.getElementById("generate-number").value = "";
        document.getElementById('input-pin').value = "";
    }
     else {
        document.getElementById("pin-matched").style.display = "none";
        document.getElementById("pin-mismatched").style.display = "block";
        document.getElementById('input-pin').value = "";
        tryLeft();
    }
}

// try left function

let count = 0;

function tryLeft() {
    var generatePin = document.getElementById("generate-number").value;
    var inputPin = document.getElementById("input-pin").value;
    count++

    if (count == 1 && generatePin !== inputPin) {
        document.getElementById("try-left").style.display = "block";
    }
     else if (count == 2 && generatePin !== inputPin) {
        document.getElementById("try-left").innerText = "2 try left"
    }
     else if (count == 3 && generatePin !== inputPin) {
        document.getElementById("try-left").innerText = "1 try left"
    }
     else if (count == 4 && generatePin !== inputPin) {
        document.getElementById("try-left").innerText = "0 try left"
        document.getElementById("submit-button").disabled = true;
    }
}
