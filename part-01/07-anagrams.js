//Method-1
function anagrams(stringA, stringB) {
    let mappedObj1 = mapChar(stringA);
    let mappedObj2 = mapChar(stringB);

    if(Object.keys(mappedObj1).length !== Object.keys(mappedObj2).length) return false;

    for(let char in mappedObj1) {
        if(mappedObj1[char] !== mappedObj2[char]) return false
    }

    return true;
}

function mapChar(str) {
    const charMap = {};
    const strArr = str.toLowerCase().replace(/[\W]/g, '').split('');

    for(let char of strArr) {
        charMap[char] = ++charMap[char] || 1;
    }

    return charMap
}

console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));
console.log(anagrams('coding money', 'money coding'));
console.log(anagrams('Hi there', 'Bye there'));

//Mehod-2
function anagrams2(stringA, stringB) {
    return sortStr(stringA) === sortStr(stringB)
}

function sortStr(str) {
    return str.toLowerCase().replace(/[\W]/g, '').split('').sort().join('');
}

console.log(anagrams2('Hi there', 'Bye there'));
console.log(anagrams2('RAIL! SAFETY!', 'fairy tales'));
