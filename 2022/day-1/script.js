const readFile = require("../../readFile");

async function day1() {
  /* Read file */
  const rawData = await readFile("2022/day-1/data.test.txt");
  // const rawData = await readFile("2022/day-1/data.txt");

  /* Parse data */
  const data = rawData
    .split("\n\n")
    .map((x) => x.split("\n").map((n) => parseInt(n)));

  /* Get highest in calories */
  const calorieTotals = data
    .map((elf) => {
      return elf.reduce((a, c) => a + c, 0);
    })
    .sort((a, b) => b - a);

  console.log({
    mostCalories: calorieTotals[0],
    topThree: calorieTotals.slice(0, 3).reduce((a, c) => a + c, 0),
  });
};

day1();
