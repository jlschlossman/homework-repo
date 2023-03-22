const scores = []

function addScore(name, score) {
    const newScore = {name: name, score: score};
    scores.push(newScore) 
}

function getScore(array, name) {
    const score = array.find(score => score.name === name);
    return score;
}

module.exports = {scores, addScore, getScore}