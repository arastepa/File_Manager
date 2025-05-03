import { pipeline } from 'node:stream';
import fs from 'node:fs';
import { createBrotliCompress } from 'node:zlib';
import path from 'node:path';

export function compressFile(srcPath, destPath) {
    try {

        const fullSrcPath = path.isAbsolute(srcPath) ? srcPath : path.join(process.cwd(), srcPath);
        const fullDestPath = path.isAbsolute(destPath) ? destPath : path.join(process.cwd(), destPath);
        const readStream = fs.createReadStream(fullSrcPath);
        const writeStream = fs.createWriteStream(fullDestPath);
        const brotli = createBrotliCompress();
        pipeline(readStream, brotli, writeStream, (err) => {
            if (err) console.log('Operation failed');
        });
    }
    catch(err){
        console.log('operation failed');
    }
  }