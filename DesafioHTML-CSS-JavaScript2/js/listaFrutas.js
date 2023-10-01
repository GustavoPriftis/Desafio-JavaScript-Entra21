var fruits = [];
document.getElementById('addButton').addEventListener('click', function() {
    var fruit = document.getElementById('fruitInput').value;
    fruits.push(fruit);
    document.getElementById('fruitInput').value = '';
    displayFruits();
});

document.getElementById('viewSelect').addEventListener('change', displayFruits);

function displayFruits() {
    var display = document.getElementById('fruitDisplay');
    display.innerHTML = '';
    var viewType = document.getElementById('viewSelect').value;
    if (viewType === 'paragraph') {
        display.innerHTML = fruits.join(', ');
    } else if (viewType === 'list') {
        var ul = document.createElement('ul');
        fruits.forEach(function(fruit) {
            var li = document.createElement('li');
            li.textContent = fruit;
            ul.appendChild(li);
        });
        display.appendChild(ul);
    } else if (viewType === 'table') {
        var table = document.createElement('table');
        table.classList.add('table');
        fruits.forEach(function(fruit) {
            var tr = document.createElement('tr');
            var td = document.createElement('td');
            td.textContent = fruit;
            tr.appendChild(td);
            table.appendChild(tr);
        });
        display.appendChild(table);
    }
}
