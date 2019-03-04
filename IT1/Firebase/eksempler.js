console.log("Skriptet er lastet");


//const betyr konstant
//oppretter variabler som definerer databasen
const db = firebase.database();
const bloggere = db.ref("bloggere");


//pusher en string til databasen, firebase lager en primærnøkkel før oss
bloggere. push("Sophie Elise");



//pusher et objekt til databasen, firebase lager primærnøkkel
bloggere.push({
  "navn":"Frøken Komiker",
  "folgere":59000
});

//Lagde et objekt med egen primærnøkkel
const pappahjerte = bloggere.child("pappahjerte");
pappahjerte.set ({
  "navn":"Peppa Gris",
  "folgere":2000000
});

//Oppdaterer objektet pappahjertet med nytt navn
pappahjerte.update({
  "navn":"Hans Olav Lahum"
});
