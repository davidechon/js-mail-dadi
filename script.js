// alert('Hello World!');

// Primo Esercizio
// %% Mail
// %% Chiedi all’utente la sua email,
// %% controlla che sia nella lista di chi può accedere,
// %% stampa un messaggio appropriato sull’esito del controllo.

// flowchart TD
// A[INIZIO] -->|prompt| B[Chiedi all'utente la sua mail]
// B -->|if| C{La mail inserita è nella lista autorizzata ad avvedere?}
// C -->|no| D[Utente non autorizzato]
// D --> B
// C -->|si| E[Msg di benvenuto]
// E --> Z[FINE]

///////////////////////////////////////////

// Secondo Esercizio
// %% Gioco dei dadi
// %% Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// %% Stabilire il vincitore, in base a chi fa il punteggio più alto.

// flowchart TD
// A[INIZIO] -->|random| B[Genera num random da 1 a 6]
// B -->|human| C[Il tuo lancio è: ]
// B -->|machina| D[Il lancio della macchina è: ]
// C & D --> F{C > D?}
// F -->|si| G[Il vincitore è: Human]
// F -->|no| H[Il vincitore è: Machina]
// G & H --> Z[FINE]

///////////////////////////////////////////

// Primo Esercizio - Mail

// A[INIZIO] -->|prompt| B[Chiedi all'utente la sua mail]
// let userMail = 0;
// userMail = prompt("Inserisci la tua mail");
// console.log(userMail);

// const app = document.getElementById('app');
// const row = document.createElement('div');
// app.append(row);
// const col = document.createElement('div');
// col.setAttribute('class', 'col-12 col-sm-6 col-md-4 col-lg-2');
// col.append(userMail);
// row.append(col);

let userList = ['prima@mail.com', 'seconda@mail.com', 'terza@mail.com'];
// B -->|if| C{La mail inserita è nella lista autorizzata ad accedere?}
let userMail = prompt("Inserisci la tua mail");
let trovata = false;
let index;
for (let i = 0; i < userList.length; i++){
  if(userMail === userList[i]){
    trovata = true;
    index = i;
    console.log(userList[index], "mail presente");
  } else {
     console.log("Dato non presente")
  }
}


// for (let i = 0; i < userList.length; i++){
//   if (userList[i] === userMail) {
//     trovata = true;
//     index = i;
//   }
//   if (trovata){
//     console.log('${userList[index]} è presente nei nostri sistemi.');
//   } else {
//     console.log("La userMail cercata non c'è");
//   }
// }


//////////////////////
// Secondo Esercizio - Dadi
// A[INIZIO] -->|random| B[Genera num random da 1 a 6]
// B -->|human| C[Il tuo lancio è: ]
// B -->|machina| D[Il lancio della macchina è: ]
// C & D --> F{C > D?}
// F -->|si| G[Il vincitore è: Human]
// F -->|no| H[Il vincitore è: Machina]
// G & H --> Z[FINE]
// let numRandom = Math.floor((Math.random() *6) + 1);