const EventEmitter = require("events");

const customEmitter = new EventEmitter();

//create an action when receive a specific event :: listen for an event

customEmitter.on("response", () => {
  console.log("data received");
});
customEmitter.on("response", () => {
  console.log("some other logic");
});
//emettre un evenement
customEmitter.emit("response");
/*
  NB : 1. on peut avoir plusieurs fonction qui ecoute un seul evenement 
       2. on l'event emit ne peut pas preceder l'event listener
       3. on peut passer des parametres dans l'emit event et les recuperer dans on event
*/

customEmitter.on("ondata", (name, age) => {
  console.log(`Hey this data for user ${name} and age equal to ${age}`);
});

customEmitter.emit("ondata", "Teddy", 24);
