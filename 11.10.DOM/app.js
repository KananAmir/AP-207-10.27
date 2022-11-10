// let heading = document.querySelector("h2");
// console.log(heading.innerHTML);

// let divElement = document.querySelector("div");

// console.log(divElement.innerHTML);
// console.log(divElement.innerText);
// console.log(divElement.textContent);

// let firstParag = document.querySelector("#first-parag");
// let allParagsWithPTag = document.querySelectorAll("p");
// let allParagsWithClass = document.querySelectorAll(".text");

// let firstParagById = document.getElementById('first-parag')
// let firstParagByClassName = document.getElementsByClassName("text");
// let tagName = document.getElementsByTagName("p");

// console.log(tagName[0].innerText);

// let parag = document.querySelector("#main .first-paragaraph");

// console.log(parag.innerText);

// let myHeading = document.getElementById("my-heading");

// myHeading.style.color = "green";
// myHeading.style.fontSize = "75px";
// myHeading.style.textDecoration = "line-throuh";

// console.log(myHeading);

// let divElement = document.querySelector("#div-element");
// let body = document.querySelector("body");
// let removeParag = document.getElementById("remove-me");

// let pElement = document.createElement("p");

// pElement.innerText = "Lorem, ipsum dolor.";

// divElement.append(pElement);

// removeParag.remove();

// function sayHi(){
//     console.log("Helloo!")
// }

// sayHi();

// function sumOfNumbers(a, b){
//     let sum = a + b;
//     console.log("sum of numbers is ", sum)
// }

// sumOfNumbers(7, 9);

// let btn = document.getElementById('click-me');
// let heading = document.querySelector('h1');

// btn.addEventListener('click', function(){
//     heading.style.color = "blue"
// })

// let toggleBtn = document.getElementById("toggle");
// let box = document.getElementById("box");

// toggleBtn.addEventListener("click", function () {
//   if (box.style.display == "none") {
//     box.style.display = "block";
//   } else {
//     box.style.display = "none";
//   }
// });

// let countries = ["Aze", "Tur", "Geo", "Rus"];

// let list = document.getElementById("list");

// for(let i=0; i<countries.length; i++){
//     let liElement = document.createElement("li");
//     liElement.innerText = countries[i];
//     list.append(liElement)
// }

// liElement.innerText = "London";

// liElement.style.color = "red";

// list.append(liElement);


let containerDiv = document.getElementById("container");

let anchorTag = document.createElement("a");
let pElement = document.createElement("p");

anchorTag.setAttribute("href", "https://github.com/KananAmir");
anchorTag.setAttribute("target", "_blank");

anchorTag.innerText = "Click to follow link";

pElement.innerText = "Hello my friend";

pElement.setAttribute('class', 'selected-paragraph')

containerDiv.append(anchorTag);
containerDiv.append(pElement);
