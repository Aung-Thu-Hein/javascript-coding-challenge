//input 
//[1, 2, 3, 4, 3, 2, 1]

//expected output 
//4

//Method-1
function lonelyInteger(array) {
    const charMap = {}

    for(let char of array) {
        charMap[char] = ++charMap[char] || 1
    }

    for(let char in charMap) {
        if(charMap[char] === 1) return char;
    }
}

console.log(lonelyInteger([1, 2, 3, 4, 3, 2, 1]));

//Method-2
function lonelyInteger2(array) { 
    let lonelyInteger = 0; 
    for (let ele of array) { 
        lonelyInteger ^= ele;
    } 
    return lonelyInteger;
}

console.log(lonelyInteger2([1, 2, 3, 4, 3, 2, 1]));
