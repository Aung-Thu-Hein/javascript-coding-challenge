//Method-1
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str = str.toLowerCase();
    let count = 0;

    for(let char of str) {
        for(let vowel of vowels) {
            if(char === vowel) count++;
        }
    }
    return count;
}

console.log(countVowels('Apple is the best company?'));
console.log(countVowels('money!'));
console.log(countVowels('smG'));
