// let person = {
//     name : "John",
//     age : 21,
//     country : "United States",
//     logData : function () {
//         console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
//     }
// }

// person.logData();

// let age = 67;

// if (age < 6) {
//     console.log("It's free");
// } else if (age < 17 ) {
//     console.log("It's under child discount!");
// } else if (age < 26 ) {
//     console.log("It's under student discount!");
// } else if (age < 66 ) {
//     console.log("It's full amount!");
// } else {
//     console.log("It's under senior citizen discount!");
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakisthan"];
// console.log("The largest 5 countries in the world:")

// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monoca"];

// largeCountries.pop();
// largeCountries.push("Pakisthan");
// largeCountries.shift();
// largeCountries.unshift("China");

// console.log("The largest 5 countries in the world:");
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }

// let dayOfMonth = 13;
// let weekDay = "Friday";
// if (dayOfMonth === 13 && weekDay === "Friday") {
//     console.log("Lol!");
// } else {
//      console.log("It's a good day");
// }

// let hands = ["Rock", "Paper", "Scissor"];

// let person1 = hands[Math.floor(Math.random() * hands.length)];
// console.log(person1);
// let person2 = hands[Math.floor(Math.random() * hands.length)];
// console.log(person2);

// if (person1 === person2) {
//     console.log("Both have same thing!");
// } else if(person1 === "Rock" && person2 === "Scissor") {
//     console.log("person 2 fail");
// } else if (person1 === "Scissor" && person2 === "Paper") {
//     console.log("person 2 fail");
// } else {
//     console.log("person 1 fail");
// }

// let fruits = ["Apple", "Orange", "Apple", "Apple", "Orange"];

// let appleShelf = "Fruits : ";
// let orangeShelf = "Fruits : ";

// function fruitSorter() {
//     for (let i = 0; i < fruits.length; i++) {
//         if (fruits[i] === "Apple") {
//             appleShelf += fruits[i] + " ";
//         } else {
//             orangeShelf += fruits[i] + " ";
//         }
//     }
// }

// fruitSorter();
// console.log(appleShelf);
// console.log(orangeShelf);

// let buttonClicked = document.querySelector("button");
// buttonClicked.addEventListener("click", function() {
//     alert("Button Clicked");
// })

const receipient = "James";
//const email = "Hey " + receipient + "! How is it going?";
const email = `Hey ${ receipient }! How is it going?`;
console.log(email);