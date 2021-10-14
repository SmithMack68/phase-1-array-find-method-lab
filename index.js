function superbowlWin(record) {
    return record.result === "W";
}
function isWin(array) {
    const winner = array.find(isWin);
    if (winner) {
        return winner.team;
    } return winner;
}