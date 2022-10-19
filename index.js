const core = require('@actions/core');

const main = async () => {

    try {
        
        const inputString = core.getInput('input-string');
        const inputPattern = core.getInput('input-pattern');

        let regex = new RegExp(inputPattern);
        let isMatched = regex.test(inputString);

        core.setOutput("is-matched", isMatched);

    }
    catch (error) {
        core.setFailed(error.message);
    }
}

main();