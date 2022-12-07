import readFile from '../../readFile';

function partOne(rounds: string[][]) {
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

  type PlayerHand = keyof typeof SCORE;

  function getScore([opponent, player]: PlayerHand[]) {
    let score = 0;

    score += SCORE[player];

    if (SCORE[opponent] === SCORE[player]) {
      return score + SCORE.DRAW;
    }

    if (opponent === 'A' && player === 'Z') {
      return score;
    }

    if (
      SCORE[player] > SCORE[opponent] ||
      (opponent === 'C' && player === 'X')
    ) {
      return score + SCORE.WIN;
    }

    return score;
  }

  return rounds.reduce(
    (acc, round) => acc + getScore(round as PlayerHand[]),
    0
  );
}

function partTwo(rounds: string[][]) {
  const SCORE = {
    X: 0,
    Y: 3,
    Z: 6,
    A: 1,
    B: 2,
    C: 3,
  };

  type PlayerHand = keyof typeof SCORE;
  const hands: PlayerHand[] = ['A', 'B', 'C'];

  function getScore([opponent, outcome]: PlayerHand[]): number {
    let score = 0;

    if (hands.findIndex((h) => h === opponent) < 0) return 0;

    /* Add outcome score */
    score += SCORE[outcome];

    /* Define player hand */
    let player: PlayerHand = opponent;
    if (outcome === 'X') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      player = hands.at(hands.findIndex((h) => h === opponent) - 1)!;
    }

    if (outcome === 'Z') {
      const index = hands.findIndex((h) => h === opponent) + 1;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      player = hands.at(index < hands.length ? index : 0)!;
    }

    /* Add score of hand */
    score += SCORE[player];

    return score;
  }

  return rounds.reduce(
    (acc, round) => acc + getScore(round as PlayerHand[]),
    0
  );
}

const getRounds = (rawData: string) =>
  rawData.split('\n').map((n) => n.split(' '));

const init = async () => {
  const { testData, realData } = await readFile(__dirname);

  const parsedTestData = getRounds(testData);
  const test = {
    partOne: partOne(parsedTestData),
    partTwo: partTwo(parsedTestData),
  };
  console.log({ test });

  const parsedRealData = getRounds(realData);
  const real = {
    partOne: partOne(parsedRealData),
    partTwo: partTwo(parsedRealData),
  };
  console.log({ real });
};

init();
