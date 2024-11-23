
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const reverse = (alpha) => alphabet[25 - alphabet.indexOf(alpha)];

function reverseWord(words) {
    let wordOutput = '';
    let word = words.toLowerCase();
    word.split('').forEach(element => {
        wordOutput += alphabet.includes(element) ? reverse(element) : element;
    });
    return wordOutput;
}

console.log(reverseWord("HELLO BABY boy"));

