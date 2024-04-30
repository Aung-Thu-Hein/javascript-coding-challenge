function selectionSort(array) {
    const n = array.length;

    for(let i=0; i<n-1; i++) {
        let minIndex = i;
        for(let j=i+1; j<n; j++) {
            if(array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }

    return array;
}

console.log(selectionSort([82, 41, 21, 11, 56, 45, 89, 74]));
