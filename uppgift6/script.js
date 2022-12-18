
function myFunction() {
    let input = document.querySelector('input').value;
    let Resultat = document.querySelector('#resultat');
    /* Om värdet är string visa "Värdet inte är ett nummer." */
    if (isNaN(input)) {
        Resultat.innerHTML = "Värdet inte är ett nummer."

    }
     /* Annars x tal (input) upphöjt till 2  " */
    else {
        Resultat.innerHTML = Math.pow(input, 2);
    }
}

