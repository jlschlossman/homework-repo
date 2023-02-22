//when clicking submit button, read data from parts of form, then create (loop) an element utilizing data from form (or pull from pre-existing elements, hidden, then clone them?) then add loop to count pre-existing coins

(function () {


const makeMoney = document.getElementById("makemoney");
const getNumber = document.getElementById("howmany");
const getCoin = document.getElementById("whichcoin");

makeMoney.addEventListener("click", () => {
        const numberInput = getNumber.value;
        const coinInput = getCoin.value;

    // const newPennies =
    // const newNickels=
    // const newDimes =
    // const newQuarters =

    for (let i = 0; i <= numberInput ; i++) {
        // create new div for every i
    }

        // output.append(newPennies)
        // output.append(newNickles)
        // output.append(newDimes)
        // output.append(newQuarters)
})




}());

