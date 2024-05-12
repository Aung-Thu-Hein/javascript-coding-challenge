function timeConvertion(str) {
    let timeStr = str.substring(0, str.length - 2).split(':').map(t => Number(t));
    let amPM = str.slice(-2);

    if(amPM == 'PM' && timeStr[0] !== 12) {
        timeStr[0] =  timeStr[0] + 12;
    }

    if(amPM == 'AM' && timeStr[0] === 12) {
        timeStr[0] = 0
    }

    return timeStr.map(t => t.toString().padStart(2, '0')).join(':');

}

console.log(timeConvertion('12:05:45PM'));   //12:05:45
console.log(timeConvertion('07:05:45PM'));   //19:05:45
console.log(timeConvertion('12:00:01AM'));   //00:00:01
console.log(timeConvertion('01:00:01AM'));   //01:00:01
console.log(timeConvertion('12:00:00PM'));   //00:00:00
