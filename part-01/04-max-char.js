//Method-1
function maxChar(str) {
    const charMap = {}
    let max = 0;
    let character = '';

    for(let char of str) {
        charMap[char] = ++charMap[char] || 1;
    }
    
    for(let key in charMap) {
        if(charMap[key] > max) {
            max = charMap[key];
            character = key;
        }
    }

    return character;

}

console.log(maxChar('abcaccccc1999'));
console.log(maxChar('hello world!'));
console.log(maxChar('helloo'));
