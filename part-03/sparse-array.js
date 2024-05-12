//inputs 
//strings = ['ab', 'ab', 'abc']
//queries = ['ab', 'abc', 'bc']

//expected output
//results = [2, 1, 0]

//Method-1
function sparseArray(strings, queries) {
    let results = [];

    for(let char of queries) {
        let count = 0;
        for(let i=0; i<strings.length; i++) {
            if(char === strings[i]) count++;
        }
        results.push(count);
    }
    return results;
}

console.log(sparseArray(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))
