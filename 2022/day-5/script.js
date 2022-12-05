const readFile = require("../../readFile");

async function day5(flipBoxes) {
  /* Read file */
  // const rawData = await readFile("2022/day-5/data.test.txt");
  const rawData = await readFile("2022/day-5/data.txt");

  /* Parse data */
  const data = rawData.split("\n\n");

  const crates = data[0]
    .split("\n")
    .map((c) => c.match(/[ ]{4}|\[[A-Z]{1}\]/g));

  const stacks = crates
    .filter((x) => !!x)
    .reduce(
      (acc, row) => {
        row.forEach((crate, index) => {
          const match = crate.match(/[A-Z]/);
          if (match) {
            acc[index].unshift(match[0]);
          }
        });

        return acc;
      },
      Array.from({ length: crates[0].length }, () => [])
    );

  const moves = data[1]
    .split("\n")
    .map((m) => m.match(/\d{1,2}/g).map((x) => Number(x)));

  moves.forEach(([crateCount, from, to]) => {
    const targetCrates = stacks[from - 1].splice(-crateCount, crateCount);
    flipBoxes && targetCrates.reverse();
    targetCrates.forEach((crate) => stacks[to - 1].push(crate));
  });

  const topBoxes = stacks
    .map((s) => s.at(-1))
    .filter((x) => !!x)
    .join("");

  console.log({ topBoxes });
}

day5(true);
day5(false);
