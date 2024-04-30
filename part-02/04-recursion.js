function factorial(n) {
    if(n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));
console.log(factorial(6));

function fabonacci(n) {
    if( n <= 1) return n;

    //by using loop
    // let current = prevPrev = 0;
    // let prev = 1;

    // for(let i=2; i<=n; i++) {
    //     current = prev + prevPrev;
    //     prevPrev = prev;
    //     prev = current;
    // }

    // return current;

    //by using recursion
    let prevPrev = fabonacci(n-2);
    let prev = fabonacci(n-1);
    return prev + prevPrev;
}

console.log(fabonacci(5));
console.log(fabonacci(6));
