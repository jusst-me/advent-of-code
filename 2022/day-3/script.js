const readFile = require("../../readFile");

const priority = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

async function day3_1() {
  /* Read file */
  // const rawData = await readFile("2022/day-3/data.test.txt");
  const rawData = await readFile("2022/day-3/data.txt");

  /* Parse data */
  const rucksacks = rawData.split("\n");
  const compartments = rucksacks.map((r) => {
    const half = Math.ceil(r.length / 2);

    return {
      first: r.slice(0, half),
      second: r.slice(half),
    };
  });

  const doubles = compartments.map(({ first, second }) => {
    let double = false,
      i = 0;
    while (!double) {
      if (second.includes(first[i])) double = first[i];

      i++;
    }

    return double;
  });

  const sum = doubles.reduce(
    (acc, cur) => acc + priority.findIndex((p) => p === cur) + 1,
    0
  );
  console.log({ doubles, sum });
}

async function day3_2() {
  /* Read file */
  // const rawData = await readFile("2022/day-3/data.test.txt");
  const rawData = await readFile("2022/day-3/data.txt");

  /* Parse data */
  const rucksacks = rawData.split("\n");
  let teamIndex = 0;
  const teams = rucksacks.reduce((acc, cur, index) => {
    acc[teamIndex] = [...(acc[teamIndex] || []), cur];

    if (index % 3 === 2) teamIndex++;

    return acc;
  }, []);

  
  const badges = teams.map(([first, second, third]) => {
    let badge = false,
    i = 0;
    while (!badge) {
      if ([second, third].every((rucksack) => rucksack.includes(first[i]))) {
        badge = first[i];
      }
      
      i++;
    }
    
    return badge;
  });
  
  const sum = badges.reduce((acc, cur) => acc + priority.findIndex(p => p === cur) + 1 ,0)
  console.log({ badges, sum });
}

// day3_1();
day3_2();
