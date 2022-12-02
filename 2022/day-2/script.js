const readFile = require("../../readFile");

async function day2_1() {
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

  /* Read file */
  // const rawData = await readFile("2022/day-2/data.test.txt");
  const rawData = await readFile("2022/day-2/data.txt");

  /* Parse data */
  const rounds = rawData.split("\n").map((n) => n.split(" "));

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

  const totalScore = rounds.reduce((acc, round) => acc + getScore(round), 0);

  console.log({ totalScore });
}

async function day2_2() {
  const SCORE = {
    X: 0,
    Y: 3,
    Z: 6,
    A: 1,
    B: 2,
    C: 3,
  };

  const hands = ["A", "B", "C"];

  /* Read file */
  // const rawData = await readFile("2022/day-2/data.test.txt");
  const rawData = await readFile("2022/day-2/data.txt");

  /* Parse data */
  const rounds = rawData.split("\n").map((n) => n.split(" "));

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

  const totalScore = rounds.reduce((acc, round) => acc + getScore(round), 0);
  console.log({ totalScore });
}

day2_2();
