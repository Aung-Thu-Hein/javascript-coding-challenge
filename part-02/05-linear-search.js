function linearSearch(array, item) {
    for(let i=0; i<array.length; i++) {
        if(array[i] === item) {
            return i;
        }
    }
    return 'No item is found';
}

console.log(linearSearch([1, 4, 78, 23, 45, 33, 21], 45));
console.log(linearSearch(["apple", "orange", "banana", "grape"], "hello"));
