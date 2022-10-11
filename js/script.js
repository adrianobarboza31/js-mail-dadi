// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
const lista =["adri@gmail.com","fede@gmail.com","marco@gmail.com"]
document.getElementById("myButton").onclick = function(){
let email= document.getElementById("myText").value
for(let i = 0; i <lista.length; i++){
    let utente=lista[i]
    let mail=email
    console.log(utente)
   console.log(mail)
   const si="accesso autorizzato"
   const no="accesso non autorizzato"
    if (email===lista[i]){
        console.log(si)
        let dadiUtente=Math.floor(Math.random() * 6) + 1;
        console.log(dadiUtente)
        let dadiComputer=Math.floor(Math.random() * 6) + 1;
        console.log(dadiComputer)
        if(dadiUtente>dadiComputer){
            console.log("hai vinto")
        }else if(dadiUtente<dadiComputer){
            console.log("hai perso")
        }else{
            console.log("pareggio")
        }
        document.getElementById("testo").innerHTML=si
        delete pp
    }else{
        console.log(no)
        const pp = document.createElement("div");
        pp.append(no);
    }
        

}
}
