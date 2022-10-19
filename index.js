const core = require('@actions/core');

const main = async () => {

    try {

        const inputValue = core.getInput('input-value');
        const searchValue = core.getInput('search-value');
        let isMatched = false;
        let matchValues = searchValue.split("|");

        for (let i = 0; i < matchValues.length; i++) {

            if(inputValue.includes(matchValues[i])) {
                isMatched = true;
                break;
            }
        }

        core.setOutput("is-matched", isMatched);

    }
    catch (error) {
        core.setFailed(error.message);
    }
}

main();