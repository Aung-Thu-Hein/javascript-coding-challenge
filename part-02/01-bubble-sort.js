function bubbleSort(array) {
    const n = array.length

    for(let i=0; i<n-1; i++) {
        for(let j=0; j<n-i-1; j++) {
            if(array[j] > array[j+1]) {
                [array[j], array[j+1]] = [array[j+1], array[j]];
            }
        }
    }
    return array;
}

console.log(bubbleSort([82, 41, 21, 11, 56, 45, 89, 74]));
