const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
};
let first = " ";
let second = " ";

for (let i in myObj.cars) {
    first += myObj.cars[i];
};
for (let a in myObj.cars[i].models[j]) {

}