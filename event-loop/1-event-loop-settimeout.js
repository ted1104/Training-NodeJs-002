// EVENT LOOP WITH SETTIME OUT
//NB : c;est aussi le meme cas avec readFile, writeFile async qui prennent en charge le callBack
console.log("first task");
//la fonction setTimeout get affloaded car il est a async, on a le resultat : first, third, second
setTimeout(() => {
  console.log("second");
}, 0);
console.log("third");
