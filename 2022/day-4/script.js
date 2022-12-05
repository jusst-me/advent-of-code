const readFile = require("../../readFile");

async function day4_1() {
  /* Read file */
  // const rawData = await readFile("2022/day-4/data.test.txt");
  const rawData = await readFile("2022/day-4/data.txt");

  /* Parse data */
  const duos = rawData
    .split("\n")
    .map((x) => x.split(",").map((y) => y.split("-").map((n) => Number(n))));

  const count = duos.reduce((acc, duo) => {
    const longestIndex =
      duo[0][1] - duo[0][0] - (duo[1][1] - duo[1][0]) >= 0 ? 0 : 1;

    if (
      duo[longestIndex][0] <= duo[1 - longestIndex][0] &&
      duo[longestIndex][1] >= duo[1 - longestIndex][1]
    ) {
      acc++;
    }

    return acc;
  }, 0);

  console.log({ count });
}

async function day4_2() {
  /* Read file */
  // const rawData = await readFile("2022/day-4/data.test.txt");
  const rawData = await readFile("2022/day-4/data.txt");

  /* Parse data */
  const duos = rawData
    .split("\n")
    .map((x) => x.split(",").map((y) => y.split("-").map((n) => Number(n))));

  const count = duos.reduce((acc, duo) => {
    const smallestIndex = duo[0][0] <= duo[1][0] ? 0 : 1;

    if (duo[smallestIndex][1] >= duo[1 - smallestIndex][0]) {
      acc++;
    }

    return acc;
  }, 0);
  console.log({ count });
}

day4_2();
