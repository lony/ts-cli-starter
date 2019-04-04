#!/usr/bin/env node
import * as chalk from 'chalk';
import * as commander from 'commander';
import * as figlet from 'figlet';

import * as packageJson from '../package.json';

console.log(chalk.default.white(figlet.textSync('ts-cli-starter', { horizontalLayout: 'full' })));

commander
  .version(packageJson.version)
  .description(packageJson.description)
  .option('-d, --do', 'Do something cool')
  .parse(process.argv);
