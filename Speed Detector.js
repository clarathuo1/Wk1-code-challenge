function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritPoints = Math.floor((speed - speedLimit) / 5);

    if (speed <= speedLimit) {
        console.log("OK");
    } else if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log(`Points: ${demeritPoints}`);
    }
}
