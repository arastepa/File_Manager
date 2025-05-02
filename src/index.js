import os from 'os';
import { userInfo } from 'os';
import readline from 'readline';
import { goUp } from './nwd/up.js';
import { changeDirectory } from './nwd/changeDir.js';
import {listDirectory} from './nwd/ls.js'

const args = process.argv.slice(2);
const usernameArg = args.find(arg => arg.startsWith('--username='));
const username = usernameArg ? usernameArg.split('=')[1] : userInfo().username;

let currentDir = os.homedir();
process.chdir(currentDir);
console.log(`Welcome to the File Manager, ${username}!`);
printCurrentDirectory();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', async (input) => {
  const [command, ...args] = input.trim().split(' ');
  try {
    switch (command) {
      case 'up':
        goUp();
        break;
      case 'cd':
        changeDirectory(args[0]);
        break;
      case 'ls':
        listDirectory();
        break;
      case '.exit':
        exitProgram();
        break;
      default:
        console.log('Invalid input');
    }
  } catch (err) {
    console.log('Operation failed');
  } finally {
    printCurrentDirectory();
  }
});

rl.on('SIGINT', exitProgram);

function exitProgram() {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  rl.close();
}

function printCurrentDirectory() {
  console.log(`You are currently in ${process.cwd()}`);
}