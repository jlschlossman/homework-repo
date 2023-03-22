const scores = []

function addScore(name, score) {
    const newScore = {name: name, score: score};
    scores.push(newScore) 
}

module.exports = {scores, addScore}