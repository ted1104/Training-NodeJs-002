//EVENT LOOP : SetInterval
// setInterval is also an async method
console.log("first");
setInterval(() => {
  console.log("second");
}, 2000);
console.log("third");
