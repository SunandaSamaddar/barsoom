import * as core from '@actions/core';

const name = core.getInput('name');

// console.log(`Hello ${name} from Barsoom!`);
const outputValue = `Hello ${name}!`;
core.setOutput('greeting', outputValue);