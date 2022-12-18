
function myFunction() {
    let input = document.querySelector('input').value;
    let Resultat = document.querySelector('#resultat');
    if (isNaN(input)) {
        Resultat.innerHTML = "Värdet inte är ett nummer."

    } else {
        Resultat.innerHTML = Math.pow(input, 2);
    }

}

