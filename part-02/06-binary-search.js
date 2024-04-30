function binarySearch(array, item) {
    let left = 0;
    let right = array.length - 1;

    while(left <= right) {
        let mid = Math.floor((left+right)/2);

        if(item === array[mid]) return mid;
        else if(item < array[mid]) right = mid - 1;
        else  left = mid + 1;
    }

    return -1; //No item is found;
}

console.log(binarySearch([12, 20, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], 31));
console.log(binarySearch([12, 20, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], 25));
console.log(binarySearch([12, 20, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34], 260));
