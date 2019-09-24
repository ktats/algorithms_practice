// Returns a boolean, whether there are two movies that sum to flightTime

function flight(flightTime, movieLengths) {
  let movies = {};
  for (let i = 0; i < movieLengths.lenght; i++) {
      movies[movieLengths[i]] = i;
  }
  for (let i = 0; i < movieLengths.length; i++) {
    let target = flightTime - movieLenghts[i];
    if (movies[target] && movies[target] !== i) {
        return true;
    }
  }
}