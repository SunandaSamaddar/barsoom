//const core = require('@actions/core');
//const github = require('@actions/github');

import * as core from '@actions/core';
import * as github from '@actions/github';


try {

    const name = core.getInput('name');

    // console.log(`Hello ${name} from Barsoom!`);
    const outputValue = `Hello ${name}!`;
    core.setOutput('greeting', outputValue);
} catch (error) {
    core.setFailed(error.message);
}