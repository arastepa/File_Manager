import fs from 'node:fs/promises';
import path from 'node:path';

export async function createFile(fileName) {
    try {
        const filePath = path.join(process.cwd(), fileName);
        await fs.writeFile(filePath, '', 'utf-8');
    }
    catch {
        console.log('operation failed');
    }
  }