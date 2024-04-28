//Method-1
function reverseStr(str) {
    let reserved = '';

    for(let char of str) {
        reserved = char + reserved;
    }
    return reserved;
}
console.log(reverseStr('Hello World!'));   //!dlroW olleH
console.log(reverseStr('-122Love'));       //evoL221-

//Method-2
function reverseStr2(str) {
    return str.split('').reverse().join('');
}
console.log(reverseStr2('Hello World!'));
console.log(reverseStr2('-122Love')); 
