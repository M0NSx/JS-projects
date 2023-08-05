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
