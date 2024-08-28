"use strict";

window.addEventListener("load", start);

let secret;

function start() {
    console.log("JavaScript er live!🎉 ");
    secretRandom();
    document.querySelector("#guesser").addEventListener("submit", reciveInput);
}

function secretRandom() {
    secret = Math.floor(Math.random() * 100) + 1;

    // Tjek i konsollen for hurtig løsning
    console.log(secret);
}

function reciveInput(event) {
    // Undgå at siden genindlæses
    event.preventDefault();
    const form = event.target;

    // Skaf gættet fra inputfeltet
    const guess = form.querySelector("#guess").valueAsNumber;
    const comp = compare(guess, secret);
    document.querySelector("#guess").value = "";

    // Sammenlign gættet med det hemmelige tal
    if (comp < 0) {
        outputAnswer(`Du gættede på ${guess} - det var for lavt`);
    }
    if (comp > 0) {
        outputAnswer(`Du gættede på ${guess} - det var for højt`);
    }
    if (comp == 0) {
        outputAnswer(`Du gættede ${guess} - det er det rigtige numer🎉`);

        // Fjern inputfelt og knap ved korrekt gæt
        document.querySelector("#guess").remove();
        document.querySelector("#guess-button").remove();
    }
}

// Sammenlign gættet med det hemmelige tal
// Returner en værdi der er større, mindre eller lig med 0
function compare(guess, secret) {
    return guess - secret;
}

// Udskriv svaret til brugeren
function outputAnswer(text) {
    const guessList = document.querySelector("#guesses");
    const newListItem = document.createElement("li");

    newListItem.textContent = text;

    guessList.appendChild(newListItem);
}
