const readFile = require("../../readFile");

function day2_1(rounds) {
  const SCORE = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
    WIN: 6,
    DRAW: 3,
    LOSE: 0,
  };

  function getScore([opponent, player]) {
    let score = 0;

    score += SCORE[player];

    if (SCORE[opponent] === SCORE[player]) {
      return score + SCORE.DRAW;
    }

    if (opponent === "A" && player === "Z") {
      return score;
    }

    if (
      SCORE[player] > SCORE[opponent] ||
      (opponent === "C" && player === "X")
    ) {
      return score + SCORE.WIN;
    }

    return score;
  }

  return rounds.reduce((acc, round) => acc + getScore(round), 0);
}

function day2_2(rounds) {
  const SCORE = {
    X: 0,
    Y: 3,
    Z: 6,
    A: 1,
    B: 2,
    C: 3,
  };

  const hands = ["A", "B", "C"];

  function getScore([opponent, outcome]) {
    let score = 0;

    /* Add outcome score */
    score += SCORE[outcome];

    /* Define player hand */
    let player = opponent;
    if (outcome === "X") {
      player = hands.at(hands.findIndex((h) => h === opponent) - 1);
    }

    if (outcome === "Z") {
      const index = hands.findIndex((h) => h === opponent) + 1;
      player = hands.at(index < hands.length ? index : 0);
    }

    /* Add score of hand */
    score += SCORE[player];

    return score;
  }

  return rounds.reduce((acc, round) => acc + getScore(round), 0);
}

async function day2() {
  /* Read file */
  const data = await readFile("2022/day-2/data.txt");

  /* Parse data */
  const rounds = data.split("\n").map((n) => n.split(" "));

  console.log({
    partOne: day2_1(rounds),
    partTwo: day2_2(rounds),
  });
}

day2();
