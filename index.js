import * as core from '@actions/core';
import * as core from '@actions/github';


try {

    const name = core.getInput('name');

    // console.log(`Hello ${name} from Barsoom!`);
    const outputValue = `Hello ${name}!`;
    core.setOutput('greeting', outputValue);
} catch (error) {
    core.setFailed(error.message);
}