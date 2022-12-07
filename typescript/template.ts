import readFile from './readFile';

function partOne(data: string[][]) {}

function partTwo(data: string[][]) {}

const parseData = (rawData: string) =>
  rawData.split('\n').map((n) => n.split(' '));

const init = async () => {
  const { testData, realData } = await readFile(__dirname);

  const parsedTestData = parseData(testData);
  const test = {
    partOne: partOne(parsedTestData),
    partTwo: partTwo(parsedTestData),
  };
  console.log({ test });

  const parsedRealData = parseData(realData);
  const real = {
    partOne: partOne(parsedRealData),
    partTwo: partTwo(parsedRealData),
  };
  console.log({ real });

  return { test, real };
};

init();
