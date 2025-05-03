import fs from 'node:fs/promises';
import path from 'node:path';
export async function renameFile(oldPath, newFileName) {
    try {

        const fullOldPath = path.isAbsolute(oldPath) ? oldPath : path.join(process.cwd(), oldPath);
        const newPath = path.join(path.dirname(fullOldPath), newFileName);
        await fs.rename(fullOldPath, newPath);
    }
    catch {
        console.log('operation failed');
    }
  }