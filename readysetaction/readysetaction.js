function main() {

const bigClass = document.getElementById("grow-me");
bigClass.classList.add("big");

const removeClass = document.getElementById("shrink-me");
removeClass.classList.remove("big");

const lis = document.querySelectorAll("li");
for (let li of lis) {
    console.log(li.innerText)
}

const link = document.querySelector(".link");
link.setAttribute("href", "https://www.example.com");
link.innerText = "somewhere"


const hideMe = document.getElementById("hide-me");
hideMe.style.display = "none"

const showMe = document.getElementById("show-me");
showMe.style.display = "block"

const name = document.getElementById("name");
const h1 = document.querySelector("h1");
h1.textContent = name.value ;
}