//Method-1
function stepString(n) {
    for(let row=0; row<n; row++) {
        let line = '';
        for(let col=0; col<n; col++) {
            if(col <= row) line += '$';
            else line += ' ';
        }
        console.log(line);
    }
}

stepString(5);
stepString(3);
stepString(8);
