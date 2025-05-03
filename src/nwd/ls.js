import fs from 'node:fs/promises';
import path from 'node:path';

export async function listDirectory() {
  try {
    const items = await fs.readdir(process.cwd());

    const directories = await Promise.all(items.map(async (item) => {
      const stats = await fs.lstat(path.join(process.cwd(), item));
      return stats.isDirectory() ? item : null;
    })).then(results => results.filter(item => item !== null));

    const files = await Promise.all(items.map(async (item) => {
      const stats = await fs.lstat(path.join(process.cwd(), item));
      return stats.isFile() ? item : null;
    })).then(results => results.filter(item => item !== null));

    directories.sort();
    files.sort();

    directories.forEach((dir, index) => console.log(`| ${index} | DIR: | ${dir}`));
    files.forEach((file, index) => console.log(`| ${index} | FILE: | ${file}`));
  } catch (error) {
    console.log('Operation failed:', error);
  }
}
