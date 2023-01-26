console.log('test');

let getPlanets = document.querySelector('#btn');

getPlanets.addEventListener('click', function() {
    fetch("https://swapi.dev/api/planets/?page=1")
    .then(function (res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data.results);
        callMePlanets(data);
        showNext(data)
    })
    .catch(function(err) {
        console.log(err);
    });
});

let callMePlanets = data => {
    let table = document.querySelector('#planetTable');
    let planets = data.results;
    table.innerHTML = '';

    let planetNameHeader = document.createElement('th');
    let populationHeader = document.createElement('th');
    let climateHeader = document.createElement('th');
    let gravityHeader = document.createElement('th');

    planetNameHeader.innerText = 'Name';
    populationHeader.innerText = 'Population';
    climateHeader.innerText = 'Climate';
    gravityHeader.innerText = 'Gravity';

    table.appendChild(planetNameHeader);
    table.appendChild(populationHeader);
    table.appendChild(climateHeader);
    table.appendChild(gravityHeader);

    for (let i=0; i < planets.length; i++) {
        let row = document.createElement('tr');
        let planetName = document.createElement('td');
        let population = document.createElement('td');
        let climate = document.createElement('td');
        let gravity = document.createElement('td');

        planetName.innerHTML = planets[i].name;
        population.innerHTML = planets[i].population;
        climate.innerHTML = planets[i].climate;
        gravity.innerHTML = planets[i].gravity;

        row.appendChild(planetName);
        row.appendChild(population);
        row.appendChild(climate);
        row.appendChild(gravity);
        table.appendChild(row)
    }
}

let showNext = (data) => {
    let nextTen = document.querySelector('#nextTen')
    let buttonNext = document.createElement('button');
    let buttonPrev = document.createElement('button')
    buttonNext.innerHTML = 'Next 10';
    buttonPrev.innerHTML = 'Prev 10';

    nextTen.appendChild(buttonNext)
    

    buttonNext.addEventListener('click', function() {
        fetch('https://swapi.dev/api/planets/?page=2')
        .then(function (res){
            return res.json();
        })
        .then(function (data) {
            console.log(data.results)
            nextTenData(data);
            nextTen.appendChild(buttonPrev);
            buttonPrev.style.display = 'block';
            buttonNext.style.display = 'none';
        })
        .catch(function (err) {
            console.log(err)
        })
    })

    buttonPrev.onclick = callMePlanets(data);
}

let nextTenData = data => {
    let nextTenPlanets = data.results;
    let table = document.querySelector('#planetTable');
    table.innerHTML = '';

    let planetNameHeader = document.createElement('th');
    let populationHeader = document.createElement('th');
    let climateHeader = document.createElement('th');
    let gravityHeader = document.createElement('th');

    planetNameHeader.innerText = 'Name';
    populationHeader.innerText = 'Population';
    climateHeader.innerText = 'Climate';
    gravityHeader.innerText = 'Gravity';

    table.appendChild(planetNameHeader);
    table.appendChild(populationHeader);
    table.appendChild(climateHeader);
    table.appendChild(gravityHeader);

    for (let i=0; i < nextTenPlanets.length; i++) {
        let row = document.createElement('tr');
        let planetName = document.createElement('td');
        let population = document.createElement('td');
        let climate = document.createElement('td');
        let gravity = document.createElement('td');

        planetName.innerHTML = nextTenPlanets[i].name;
        population.innerHTML = nextTenPlanets[i].population;
        climate.innerHTML = nextTenPlanets[i].climate;
        gravity.innerHTML = nextTenPlanets[i].gravity;

        row.appendChild(planetName);
        row.appendChild(population);
        row.appendChild(climate);
        row.appendChild(gravity);
        table.appendChild(row)
    }
}