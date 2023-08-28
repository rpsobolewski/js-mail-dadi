
//Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.





const mails = ["rpsobolewski@gmail.com", "pincopallino@gmail.com", "gerryscotti@gmail.com"];
console.log(mails);
document.querySelector('button').addEventListener('click', function (e) {


    const mail = document.getElementById("mail").value;
    console.log(mail);

    for (let i = 0; i < mails.length; i++) {
        if (mail == mails[i]){
            console.log("ao")
        }
        
    }
})