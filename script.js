// alert('Hello World!');

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