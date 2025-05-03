import { copyFile } from "./copyFile.js";
import { deleteFile } from "./deleteFile.js";

export async function  moveFile(srcPath, destPath) {
    try {
        await copyFile(srcPath, destPath);
        await deleteFile(srcPath);
    }
    catch{
        console.log('operation failed');
    }
  }