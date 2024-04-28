//Method-1
function reverseInt(int) {
    const reserved = int.toString().split('').reverse().join('');

    return parseInt(reserved) * Math.sign(int);
}

console.log(reverseInt(-13));   //-31
console.log(reverseInt(13));    //31
