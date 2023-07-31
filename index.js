function maxOfTwoNunmbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

const _maxOfTwoNumbers = (num1, num2) => {
    return num1 > num2 ? nim1 : num2;
};

// logging the results of the maxOfTwoNumbers

console.log(maxOfTwoNumbers(4, 7));

console.log(_maxOfTwoNumbers(4, 7));

// logging the results of the maxOfTwoNumbers

function findlongestWord(words = []) {
    let wordsLengh = words.length;
    let reesult = 0;

    for (let index = 0; index < wordsLength; index++) {

        // console.log(words [result]);

        const wordsLengh = words[index].length;
        const initialLength = words[result].length;

        if (wordLength > initialLength) {
            result = index;
        }
    }
    return words [result];
}

const _findLongestWord = (words = {}) => {

    let wordsLength = words.Length;

    let result = 0;

    for (let index = 0; index < wordsLength; index++) {

        const wordLength = words[index].Length;

        const initialLength = words [result] .Length;

        result = wordLength > initial ? index : result;

    }

    return words [result];

};

// logging the results of the findLongestWord

const words = ["words", "church", "party", "person", "package", "assembly"];

console.log(findlongestWord(words));

console.log(_findLongestWord(words));

// logging the result of the findLongestWord


function sumNumbers (numbers = [1, 2]) {

    const result = numbers.reduce (

    (initialResult, currentItem) => initialResult + currentItem,

    0
    );

    return result;
};

// logging the results of the findLongestWord

const numbers = [2, 3, 5, 76, 1, 4, 2];

console.log(sumNumbers (numbers));

console.log(_sumNumbers (numbers));

// logging the results of the findLongestWord