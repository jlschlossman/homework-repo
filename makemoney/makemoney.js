//when clicking submit button, read data from parts of form, then create (loop) an element utilizing data from form (or pull from pre-existing elements, hidden, then clone them?) then add loop to count pre-existing coins

(function () {


const makeMoney = document.getElementById("makemoney");


makeMoney.addEventListener("click", () => {
    const getNumber = document.getElementById("howmany");
    const getCoin = document.getElementById("whichcoin");
    console.log(getCoin.value);
    console.log(getNumber.value);

    for (let i = 0; i <getNumber.value; i++) {

        const newCoin = document.createElement("div");
        newCoin.classList.add(getCoin.value);

        document.body.append(newCoin)
    }








});
}());
