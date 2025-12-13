import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying",
  ];
  const pictures = [
    "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1627720/capsule_616x353.jpg?t=1764565054",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhDiB5RB_xLJ0219yyRHoB7KQslkKbyi2-EQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6lM8sP8YAP4WLyervrY7vdvSWPvvduF0LQ&s",
    "https://insider-gaming.com/wp-content/uploads/2024/08/black-myth-wukong.png",
  ];
  const excuseLine = document.querySelector("#excuse");
  const picture = document.querySelector("#pictures");
  
  // const footer = document.querySelector(#footer)
  

  function getrandomindex(array) {
    const randomindex = Math.floor(Math.random() * array.length);
    return randomindex;
  }

  let whoindex = getrandomindex(who);
  let actionindex = getrandomindex(action);
  let whatindex = getrandomindex(what);
  let whenindex = getrandomindex(when);

  excuseLine.innerHTML = `${who[whoindex]} ${action[actionindex]} ${what[whatindex]} ${when[whenindex]}`;

  picture.src = pictures[getrandomindex(pictures)];
  console.log(`${what} ${who} ${when} ${action}`);
  // console.log(footer.classname)
  if (picture) {
    picture.style.width = '18rem';
}

  // footer.classmate += " bg-success"
};
