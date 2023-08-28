let baseURL = "http://numbersapi.com";

//1
let favNumber = 3;

$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
});

//2
let favNumbers = [8, 16, 28]

$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
    console.log(data);
})

//3
Promise.all(Array.from({length:4},()=> {
  return $.getJSON(`${baseURL}/${favNumber}?json`);
})).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});


// let myFavoriteNumber = 5;
// let factsURL = baseURL + "/" + myFavoriteNumber + "/trivia";
// fetch(factsURL) 
// .then(response => response.text())
// .then(data => {
//   let fourFacts = data.split("\n").slice(0,4);
//   fourFacts.forEach((fact) => {
//     let factNode= document.createElement("p");
//     factNode.innerText = fact;
//     document.body.appendChild(factNode);
//   });
// });




