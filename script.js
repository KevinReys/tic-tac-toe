const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];

function init() {
  selected = [];

  currentPlayer.innerHTML = `PLAYER OF THE TIME: ${player}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, 100);

  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `PLAYER OF THE TIME: ${player}`;
}

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const itens = selected
    .map((item, i) => (item === playerLastMove ? i : null))
    .filter((item) => item !== null);

  for (let pos of positions) {
    if (pos.every((item) => itens.includes(item))) {
      alert("THE PLAYER'" + playerLastMove + "' IT WON!");
      init();
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("IT WAS A DRAW!");
    init();
    return;
  }
}
