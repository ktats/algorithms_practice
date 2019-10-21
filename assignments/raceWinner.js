function raceWinner(raceTime) {
    let secondFastest = 'dnf'
    let fastest = 'dnf'
    let winner = null;
    for (let i = 0; i < raceTime.length; i++) {
        let { name, time } = raceTime[i];
        if ((fastest === 'dnf' && typeof time === 'number') || (typeof time === 'number' && time < fastest)) {
            secondFastest = fastest;
            fastest = time;
            winner = name;
        }
    }
    if (fastest === 'dnf' && secondFastest === 'dnf') {
      return 'There is no winner';
    } else if (typeof fastest === 'number' && secondFastest === 'dnf') {
        return `${winner} won by no contest`;
    } else {
        winningTime = getWinTime(fastest, secondFastest);
        return `${winner} won by ${winningTime}`
    }
}

function getWinTime(fast, slow) {
    let fastSplit = fast.split(':');
    let fastHours = parseInt(fastSplit[0]);
    let fastMinutes = parseInt(fastSplit[1]);
    let fastSeconds = parseInt(fastSplit[2]);
    let slowSplit = slow.split(':');
    let slowHours = parseInt(slowSplit[0]);
    let slowMinutes = parseInt(slowSplit[1]);
    let slowSeconds = parseInt(slowSplit[2]);
    let finalHours, finalMinutes, finalSeconds;

    if (slowSeconds > fastSeconds) {
        if (fastMinutes === 0) {
            fastHours -= 1;
            fastMinutes = 59;
            fastSeconds += 60;
        } else {
            fastMinutes -= 1;
            fastSeconds += 60;
        }
    }
    finalSeconds = fastSeconds - slowSeconds;

    if (slowMinutes > fastMinutes) {
        fastHours -= 1;
        fastMinutes += 60;
    }
    finalMinutes = fastMinutes - slowMinutes;

    finalHours = fastHours - slowHours;
    return `${finalHours} hours, ${finalMinutes} minutes, and ${finalSeconds} seconds`;
}