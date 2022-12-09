const addButtonElement = document.querySelector("#item");
const stateOfKnapsack = document.querySelector(".knapsack");
const dataCollector = document.getElementsByTagName("input");
const resetKnapsack = document.querySelector(".weights")
const selectInp = document.querySelector(".select");
const linkItemlist = document.querySelector("#itemlist");
const weights = document.querySelector(".weight")

let itemlist = [
  { name: "item1", weight: 0.5, value: 200 },
  { name: "Banana", weight: 0.25, value: 250 },
  { name: "Mango", weight: 1, value: 200 },
  { name: "Apple", weight: 0.5, value: 1500 },
  { name: "Graps", weight: 0.75, value: 2000 },
  { name: "Orange", weight: 2, value: 2000 },
  { name: "Ananas", weight: 3, value: 3000 },
  { name: "Lemon", weight: 0.25, value: 200 },
  { name: "Strawberry", weight: 0.5, value: 3000 },
  { name: "Guava", weight: 0.75, value: 200 },
  { name: "Watermelon", weight: 1.5, value: 2000 },
  { name: "Kolanut", weight: 0.75, value: 1500 },
  { name: "Cucumber", weight: 0.25, value: 3500 },
  { name: "Pawpaw", weight: 2, value: 2000 },
  { name: "Carrot", weight: 0.75, value: 750 },
  { name: "Coconut", weight: 1, value: 2500 },
  { name: "Pear", weight: 0.75, value: 2000 },
  { name: "Manderin", weight: 0.55, value: 200 },
  { name: "Yam", weight: 0.5, value: 1200 },
  { name: "Cassava", weight: 0.95, value: 500 },
  { name: "Potato", weight: 0.95, value: 500 },
];

function getData() {
  var inputVal = document.querySelector("input").value;
  alert(inputVal);

  let sumOfweight = 0;
  let sumOfvalues = 0;

  linkItemlist.addEventListener("change", () => {
    console.log(sumOfvalues, inputVal)

    if (sumOfweight < inputVal) {
      var optVal = linkItemlist.value
      stateOfKnapsack.innerHTML += `${itemlist[optVal].name}, ${itemlist[optVal].weight}, ${itemlist[optVal].value} <br/>`

      for (let i = 0; i < itemlist.length; i++) {
        if (itemlist[optVal].name === itemlist[i].name) {
          sumOfweight += itemlist[i].weight;
          sumOfvalues += itemlist[i].value;
        }
      }

      weights.innerHTML = "sum of weight:" + sumOfweight + " " + "sumOfvalues" + " " + sumOfvalues;
    }

    else{
      document.querySelector(".knapsack").style.background = "red";
    }
  })
}



