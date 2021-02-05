alert("Hello Welcome to Peplane.Inc I hope You Enjoy it!!")
alert("rate it")

let user = {
    name:{
        first:"Teddy",
        last: "Ferdian"
    },
    age: 22,
}
console.log("Hallo, Nama saya" + user.name.first + "" + user.name.last);
console.log ("Umur saya" + user.age +"tahun")

let language = "Indonesia";
let greeting = "selamat pagi"

if(language === "english") {
    greeting = "good morning";
} else if(language === "Java") {
    greeting = "Sugeng Enjing"
} else if(language === "Indonesia") {
    greeting = "Selamat Pagi"
}

console.log(greeting);

const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});