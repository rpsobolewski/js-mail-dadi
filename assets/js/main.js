//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

//numero random computer
//numero random giocatore
//confrontare numeri
//stampa vincitore




document.querySelector('button').addEventListener('click', function (e){
    
    const computer = Math.floor(Math.random() * 6) + 1;
    console.log(computer);

    const valoreComputer = document.getElementById("valoreComputer");
    valoreComputer.innerHTML = "numero computer "+ computer;


    const user = Math.floor(Math.random() * 6) + 1;
    console.log(user);

    const valoreUtenter = document.getElementById("valoreUtente");
    valoreUtente.innerHTML = "numero utente "+ user;


    const risultato = document.getElementById("risultato");

    if(computer > user){
        console.log("vince computer")
        risultato.innerHTML = "vince computer"
    } else if (computer < user){
        console.log("vince utente")
        risultato.innerHTML = "vince utente"
    } else{
        console.log("pareggio")
        risultato.innerHTML = "pareggio"
    }
})