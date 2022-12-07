import readFile from '../../readFile';

type ParsedData = number[][];
type Answer = { partOne: number; partTwo: number };

/* Parse data */
const getParsedData = (data: string): ParsedData =>
  data.split('\n\n').map((x) => x.split('\n').map((n) => parseInt(n)));

const getAnswers = (parsedData: ParsedData): Answer => {
  const getCalorieTotals = (data: ParsedData): Array<number> =>
    data.map((elf) => elf.reduce((a, c) => a + c, 0)).sort((a, b) => b - a);

  const calorieTotals = getCalorieTotals(parsedData);
  const partOne = calorieTotals[0];
  const partTwo = calorieTotals.slice(0, 3).reduce((a, c) => a + c, 0);

  return { partOne, partTwo };
};

const init = async () => {
  const { testData, realData } = await readFile(__dirname);

  const test = getAnswers(getParsedData(testData));
  console.log({ test });

  const real = getAnswers(getParsedData(realData));
  console.log({ real });

  return { test, real };
};

init();
