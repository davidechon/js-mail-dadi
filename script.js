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