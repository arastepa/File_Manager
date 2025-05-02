import path from 'path';
import fs from 'node:fs/promises';

export async function deleteFile(filePath) {
    try {

        const fullPath = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
        await fs.unlink(fullPath);
    }
    catch
    {
        console.log('operation failed');
    }
  }