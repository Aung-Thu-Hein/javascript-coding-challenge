//Method-1
function isPalindromed(str) {
    let reversed = str.split('').reverse().join('');
    return reversed === str;
}

console.log(isPalindromed('level'));     //true
console.log(isPalindromed('apple'));     //false

//Method-2
function isPalindromed2(str) {
    return str.split('').every((char, index) => {
        const oppositeIndex = str.length - 1 - index
        return char === str[oppositeIndex];
    });
}

console.log(isPalindromed2('hello olleh'));     //true
console.log(isPalindromed2('level'));           //true
console.log(isPalindromed2('hello'));           //false

//Method-3 (two pointer technique)
function isPalindromed3(str) {
    let min = 0;
    let max = str.length - 1;

    do {
        if(str[min] === str[max]) {
            min++;
            max--;
        } else {
            return false
        }
    } while(min < max) 

    return true;
}

console.log(isPalindromed3('hello olleh'));     //true
console.log(isPalindromed3('level'));           //true
console.log(isPalindromed3('hello'));           //false
