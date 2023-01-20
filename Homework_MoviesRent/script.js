console.log('test');
// Movies renting App 
// Create a movie renting app 
// There should be an array of movie names 
// There should be an input and a search button 
// When the person enters a name of a movie it should search the array 
// If the name exists it should show an H1 element that says: "The movie can be rented"
// in green text If the name does not exist it should show an H1 element that says: 
// "The movie can't be rented" in red text 
// The input should not be case sensitive (it should find the movie regardless of capital or small letters )

let movies = ['Nemo', 'Star Wars: Return of the Jedi', 'Avatar', 'Die Hard', 'Who Am I', 'Now You See Me'];

let searchBar = document.getElementById('searchBar');
let btn = document.querySelector('#btn');
let result = document.querySelector('#result')
let found = false;



function findMovie(input, array) {
    let announcement = document.createElement('h1');
    searchBar.innerHTML = '';
    
    for (let i=0; i < movies.length; i++) {
        if(input.value.toLowerCase() === movies[i].toLowerCase()) {
            found = true;
        }
    }

    // Wrong
    // for (let i=0; i < movies.length; i++) {
    //     let lowerCaseTitle = movies[i].toLowerCase();
    //     if(searchBar.value.toLowerCase() === lowerCaseTitle) {
    //         found = true;
    //         break;
    //     } else {
    //         console.log('Movie not found');
    //         break;
    //     }
    // }


    if (found) {
        result.appendChild(announcement).innerHTML = 'The movie can be rented';
        result.appendChild(announcement).style.color = 'green';
    } else {
        result.appendChild(announcement).style.color = 'red';
        result.appendChild(announcement).innerHTML = 'The movie can`t be rented';
    }
}


btn.addEventListener('click', () => {
    findMovie(searchBar, movies);
    searchBar.value = '';
})