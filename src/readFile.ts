import fs from 'fs';
import path from 'path';

export default async (dir: string, file: string): Promise<string> => {
  const [year, day] = dir.split('\\').slice(-2);

  return fs.readFileSync(
    path.join(__dirname, `../data/${year}/${day}/${file}`),
    'utf8'
  );
};
