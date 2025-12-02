import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = ["before the class", "when I was sleeping", "while I was exercising", "during my lunch", "while I was praying"];
  const excuseLine = document.querySelector("#excuse");
  function getrandomindex(array) {
    const randomindex = Math.floor(Math.random() * array.length);
    return randomindex;
  }
  let whoindex = getrandomindex(who);
  let actionindex = getrandomindex(action);
  let whatindex = getrandomindex(what);
  let whenindex = getrandomindex(when);
  excuseLine.innerHTML = `${who[whoindex]} ${action[actionindex]} ${what[whatindex]} ${when[whenindex]}`;


  console.log(`${what} ${who} ${when}`);
};
