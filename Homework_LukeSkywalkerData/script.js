// Exercise 2
// Create a button
// When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:
// Height
// Birth Year
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1

let starWarsBtn = document.getElementById('starWars');

starWarsBtn.addEventListener('click', function() {
    fetch('https://swapi.dev/api/people/1')
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data.name);
        console.log('Data', data)
        manageData(data);
    })
    .catch(function(err) {
        console.log(err)
    });
});

function manageData(data) {
    let starWarsContainer = document.getElementById('container');
    let lukeName = document.createElement('h1');
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    starWarsContainer.appendChild(lukeName);
    starWarsContainer.appendChild(table);
    lukeName.innerText = data.name;

    for (let i=0; i < 1; i++) {
        const row = document.createElement('tr');

        for (let j=0; j < 1; j++ ) {
            const column = document.createElement('td');
            const lukeText = document.createTextNode(`Height: ${data.height}, Birth Year: ${data.birth_year}, Eye Color: ${data.eye_color}, Hair Color: ${data.hair_color}`);
            column.appendChild(lukeText);
            row.appendChild(column);
        }
        tableBody.appendChild(row);
    }
    table.appendChild(tableBody)
}
