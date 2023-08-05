const prompt = require('prompt-sync')();

const deposit = () => {
    while (true) {
        const depositAmount = prompt('Insert a deposit amount: ');
        const numberdepositAmount = parseFloat(depositAmount);

        if (isNaN(numberdepositAmount) || numberdepositAmount <= 0) {
            console.log('Invalid deposit number, try again... ');
        }
        else {
            return numberdepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while (true) {
        const lines = prompt('Enter the number of lines to bet (1-3): ');
        const numberOfLines = parseFloat(lines);
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log('Invalid number of lines, try again... ');
        }
        else {
            return numberOfLines;
        }
    }
};

let depositAmount = deposit();
console.log(depositAmount)
const numberOfLines = getNumberOfLines();
console.log(numberOfLines)
