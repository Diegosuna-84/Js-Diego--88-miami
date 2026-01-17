import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  let nouns = ["The dog", "My grandma", "The mailman", "My bird"];
  let actions = ["ate", "peed", "crushed", "broke"];
  let whats = ["my homework", "my phone", "the car"];
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
  

  function getRandomIndex(array) {
    const randomindex = Math.floor(Math.random() * array.length);
    return randomindex;
  }

  let nounsIndex = getRandomIndex(nouns);
  let actionsIndex = getRandomIndex(actions);
  let whatsIndex = getRandomIndex(whats);
  let whenIndex = getRandomIndex(when);

  excuseLine.innerHTML = `${nouns[nounsIndex]} ${actions[actionsIndex]} ${whats[whatsIndex]} ${when[whenIndex]}`;

  picture.src = pictures[getRandomIndex(pictures)];
  console.log(`${whats} ${nouns} ${when} ${actions}`);
  // console.log(footer.classname)
  if (picture) {
    picture.style.width = '18rem';
}

  // footer.classmate += " bg-success"
};
