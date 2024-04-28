//Method-1
function changeTitleCase(str) {
    const words = str.split(' ');
    return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(changeTitleCase('you are the apple of my eye'));

