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

    table.setAttribute('border', 1);

    for (let i=0; i < 1; i++) {
        let row = document.createElement('tr');
        let rowSecond = document.createElement('tr')
        let heightHeader = document.createElement('th')
        let birthYear = document.createElement('th');
        let eyeColor = document.createElement('th');
        let hairColor = document.createElement('th');
        
        heightHeader.innerHTML = 'Height'
        birthYear.innerHTML = 'Birth Year'
        eyeColor.innerHTML = 'Eye Color'
        hairColor.innerHTML = 'Hair Color'
        
        row.appendChild(heightHeader)
        row.appendChild(birthYear)
        row.appendChild(eyeColor)
        row.appendChild(hairColor)

        for (let j=0; j < 1; j++ ) {
            let column1 = document.createElement('td');
            let column2 = document.createElement('td');
            let column3 = document.createElement('td');
            let column4 = document.createElement('td');
            //const lukeText = document.createTextNode(`Height: ${data.height}, Birth Year: ${data.birth_year}, Eye Color: ${data.eye_color}, Hair Color: ${data.hair_color}`);
            column1.innerHTML = data.height;
            column2.innerHTML = data.birth_year;
            column3.innerHTML = data.eye_color;
            column4.innerHTML = data.hair_color;
            // j.appendChild(column1);
            rowSecond.appendChild(column1);
            rowSecond.appendChild(column2);
            rowSecond.appendChild(column3);
            rowSecond.appendChild(column4);
        }
        tableBody.appendChild(row);
        tableBody.appendChild(rowSecond);
    }
    table.appendChild(tableBody)
}
