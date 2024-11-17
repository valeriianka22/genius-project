//***5***
//1
// const Ann = {
//     name: "Ann",
//     age: 38,
//     showInfo: function (job) {
//         console.group(`${this.name} info:`);
//         console.log(`Name is : ${this.name}`);
//         console.log(`Age is : ${this.age}`);
//         console.log(`Job is : ${job}`);
//         console.groupEnd();
//     },
// };

// const Vano = {
//     name: "Ivan",
//     age: 45,
// };
// Ann.showInfo("developer");
// Ann.showInfo.call(Vano,"developer");

//2
// function showHTMLDefinition() { 
//     alert("HTML (HyperText Markup Language) - це стандартна мова розмітки для створення веб-сторінок."); 
// }
// function showCSSDefinition() { 
//     alert("CSS (Cascading Style Sheets) - це мова стилів, яка використовується для опису вигляду і форматування документа, написаного мовою розмітки."); 
// }

// document.getElementById("1").addEventListener("click", showHTMLDefinition);
// document.getElementById("2").addEventListener("click", showCSSDefinition);

//3
// function Store (name, pricePerKG, quantity) {
//     const price = pricePerKG * quantity;
//     return `${name.toUpperCase()} коштує ${price} гривень.`
// }
// console.log(Store("Банан", 15, 4));