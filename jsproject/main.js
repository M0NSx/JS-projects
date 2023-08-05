const prompt = require('prompt-sync')();

const deposit = () => {
    while (true) {
        const depositAmount = prompt('Insert a deposit amount: ');
