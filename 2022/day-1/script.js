const readFile = require("../../readFile");

async function day1() {
  /* Parse data */
  const parseData = (data) => {
    return data.split("\n\n").map((x) => x.split("\n").map((n) => parseInt(n)));
  };

  const getCalorieTotals = (data) => {
    return data
      .map((elf) => {
        return elf.reduce((a, c) => a + c, 0);
      })
      .sort((a, b) => b - a);
  };

  const rawData = await readFile("2022/day-1/data.txt");
  const parsedData = parseData(rawData);

  console.log({
    partOne: getCalorieTotals(parsedData)[0],
    partTwo: getCalorieTotals(parsedData)
      .slice(0, 3)
      .reduce((a, c) => a + c, 0),
  });
}

day1();
