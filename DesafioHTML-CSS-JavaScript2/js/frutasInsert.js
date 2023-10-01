
const fruits = [];

function addFruit() {
    const fruitInput = document.getElementById("fruit-input");
    const fruitName = fruitInput.value.trim();

    if (fruitName !== "") {
        fruits.push(fruitName);
        fruitInput.value = ""; 
        displayFruits();
    }
}

function displayFruits() {
    const fruitsList = document.getElementById("fruits-list");
    fruitsList.innerHTML = ""; 

    fruits.forEach(fruit => {
        const listItem = document.createElement("li");
        listItem.textContent = fruit;
        listItem.className = "list-group-item";
        fruitsList.appendChild(listItem);
    });
}

displayFruits();