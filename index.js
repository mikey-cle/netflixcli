const fs = require('fs');
let movieList = [];

try {
    let tempJson = fs.readFileSync('./netflix.json');
    let tempNetflix = JSON.parse(tempJson);
    movieList.push(tempNetflix);
} catch (error) {
    movieList = [];
}
const add = () =>{
   if (process.argv[2] === 'add'){
        tempMovie = {movie: process.argv[3]};
        movieList.push(tempMovie);
        newMovie = JSON.stringify(movieList);
        fs.writeFileSync('./netflix.json', newMovie);
   }
     else if(process.argv[2] === 'del'){
        let x = process.argv[3];
        movieList.splice(1, x);
       }}

add();
  

  
