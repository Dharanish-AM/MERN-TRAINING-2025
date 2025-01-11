var a = [1, "two", "three"];
console.log(a);

var b = [
  {
    name: "jp",
    class: "CSE A",
  },
  {
    name: "aji",
    class: "CSE A",
  },
  {
    name: "Dharanish",
    class: "CSE A",
  },
];
b.forEach((person) => {
  console.log(person.name, person.class);
});

for (let [i, j] of b.entries()) {
  console.log(i, j);
}

const arr = [10, 20, 40, 50];

let brr = [...arr, 60];
let crr = [60,...arr]

const func = ()=>{
    console.log("Hello");
}

console.log("A :", arr);
console.log("B :", brr);
console.log("C :", crr);
func()
