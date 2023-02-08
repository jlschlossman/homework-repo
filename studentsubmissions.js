const submissions = [
    {name: "Jane", score: 95, date: "2020=02-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true},
];

function addSubmission(array, newName, newScore, newDate) {
    let studentPass;
    if (newScore >= 60) {
        studentPass = true;
    } else {
        studentPass = false;
    };
    const newStudent = {
        name: newName,
        score: newScore,
        date: newDate,
        passed: studentPass
    };
    return array.push(newStudent);
}


function deleteSubmissionByIndex(array, index) {
    return array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
    
}

function editSubmission(array, index, score) {

}

function findSubmisssionByName(array, name) {
    return array.find((item) => item.name === name);
}

function findLowestScore(array) {

}

function findAverageScore(array) {

}

function filterPassing(array) {

}

function filter90AndAbove(array) {

}




addSubmission(submissions, "Jeremy", 70, "2020-05-05")

console.log(submissions)
















// function findSubmisssionByName(array, name) {
//     return array.find((item) => item.name === name);
// }


// //with loop
// function findSubmisssionByName(array, name) {

//     for (let item of array) {
//         if (item.name === name) {
//             return item;
//         }
//     }
// }


// console.log(findSubmisssionByName(submissions, "Jack"));