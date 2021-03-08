let counter = document.querySelector(".counter");
const addcount = document.querySelector("#addCountBtn");
const lowerCount = document.querySelector("#LowerCountBtn");

let count = 0;

addcount.addEventListener("click", incerementCounter);
lowerCount.addEventListener("click", decerementCounter);
//
function incerementCounter() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > "0") {
    counter.style.color = "#4caf50";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards",
  });
}
//
function decerementCounter() {
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < "0") {
    counter.style.color = "red";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards",
  });
}
