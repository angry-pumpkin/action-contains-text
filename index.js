const core = require('@actions/core');

const main = async () => {

    try {

        const inputValue = core.getInput('input-value');
        console.log('inputValue :'+inputValue);

        const searchValue = core.getInput('search-value');
        console.log('searchValue :'+searchValue);

        let isMatched = false;
        let matchValues = searchValue.split("|");

        console.log('matchValues :'+matchValues);

        for (let i = 0; i < matchValues.length; i++) {

            if(inputValue.includes(matchValues[i])) {
                isMatched = true;
                break;
            }
        }

        console.log('isMatched :'+isMatched);

        core.setOutput("is-matched", isMatched);

    }
    catch (error) {
        core.setFailed(error.message);
    }
}

main();