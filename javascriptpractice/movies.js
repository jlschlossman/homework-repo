const movies = [
    {
        title: "Star Wars: A New Hope",
        directed_by: {
            name: "George Lucas"
        },
        year: 1977
    },
    {
        title: "Spaceballs",
        directed_by: {
            name: "Mel Brooks"
        },
        year: 1987
    },
    {
        title: "Galaxy Quest",
        directed_by: {
            name: "Dean Parisot"
        },
        year: 1999
    },
    {
        title: "Star Wars: The Last Jedi",
        directed_by: {
            name: "Rian Johnson"
        },
        year: 2017
    }
]

//find a movie by title
function findMovieByTitle(array, title) {
    return array.find(movie => movie.title === title);
}

//find a movie by director
function findMovieByDirector(array, director) {
    return array.find(movie => movie.directed_by.name === director);
}
// console.log(findMovieByDirector(movies, "Mel Brooks"))


//add a movie to the array

function addMovie(array, newTitle, newDirected_by, newYear) {
    const newMovie = {
        title: newTitle,
        year: newYear,
        directed_by: {
            name: newDirected_by,
        },
    };
    array.push(newMovie);
    return movies;
}
// console.log(addMovie(movies, "Bill and Ted's Adventure", "Stephen Herek", 1989))
