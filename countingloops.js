// for (initialization; condition; final-expression)

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

/* while (condition) {
    stuff
}
*/

let c = 0;
while (c < 10) {
    c++;
    console.log(c);
}

let f = 11;
while (f > 1) {
    f--;
    console.log(f);
}

/* do {
    stuff
}
while (condition);
*/

let y = 0;
do {
    y++;
    console.log(y);
}
while (y < 10);


let p = 11;
do {
    p--;
    console.log(p);
}
while (p > 1);

//for loop

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let number of numbers) {
    console.log(number);
}