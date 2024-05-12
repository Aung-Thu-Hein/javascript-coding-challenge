function flippingBits(n) {
    let binaryNumber = n.toString(2).padStart(32, "0");

    let invertBinary = '';
    for(let char of binaryNumber) {
        invertBinary += char == 0 ? '1' : '0';
    }

    return parseInt(invertBinary, 2);
}

console.log(flippingBits(9));

//Method-2 
function flippingBits2(n) {
    return ~n >>> 0;
}

console.log(flippingBits2(5));
