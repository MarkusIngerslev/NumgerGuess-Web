"use strict";

window.addEventListener("load", start);

let secret;

function start() {
    console.log("JavaScript er live!🎉 ");
    secret = 42;
    document.querySelector("#guesser").addEventListener("submit", reciveInput);
}

function reciveInput(event) {
    event.preventDefault();
    const form = event.target;

    const guess = form.querySelector("#guess").valueAsNumber;
    console.log(guess);

    const comp = compare(guess, secret);
    console.log(comp);
    if (comp < 0) {
        outputAnswer(`Du gættede på ${guess} - det var for lavt`);
    }
    if (comp > 0) {
        outputAnswer(`Du gættede på ${guess} - det var for højt`);
    }
    if (comp == 0) {
        outputAnswer(`Du gættede ${guess} - det er det rigtige numer🎉`);
    }
}

function compare(guess, secret) {
    return guess - secret;
}

function outputAnswer(text) {
    const guessList = document.querySelector("#guesses");
    const newListItem = document.createElement("li");

    newListItem.textContent = text;

    guessList.appendChild(newListItem);
}

function CSSConfetti() {}
