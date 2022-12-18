let btm = document.querySelector('button');
let Resultat = document.querySelector('#resultat');

/* Funktionen som kallas av en knapptryckning av knappen */
btm.addEventListener('click', () => {
    /* Funktionen generera en lista som innehåller ett slumpat antal element mellan 1 och 10 */
    let lista10 = Math.floor(Math.random() * 10) + 1; 
   
    let Ordered = document.createElement('ol'); /* Skapar en Ordered list */
    Resultat.append(Ordered);
    for (i = 0; i < lista10; i++) {
        /* Funktionen generera en lista som innehåller ett slumpat antal element mellan 0-100 */
        let lista100 = Math.floor(Math.random() * 101);
        let Unordered = document.createElement('li'); /* Skapar en Unordered list */
        Unordered.innerText = lista100;
        Ordered.append(Unordered); /* Lägg till "Unordered" i "Ordered" */
    }   
});