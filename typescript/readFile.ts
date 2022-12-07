import fs from 'fs';
import path from 'path';

export default async (
  dir: string
): Promise<{ testData: string; realData: string }> => {
  const [year, day] = dir.split('\\').slice(-2);

  const testData = await fs.readFileSync(
    path.join(__dirname, `../data/${year}/${day}/data.test.txt`),
    'utf8'
  );
  const realData = await fs.readFileSync(
    path.join(__dirname, `../data/${year}/${day}/data.txt`),
    'utf8'
  );

  return { testData, realData };
};
