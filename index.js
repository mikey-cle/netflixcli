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
        
        JSON.stringify(movieList);
        movieList.push(tempMovie);
        fs.writeFileSync('./netflix.json', movieList);
     }
    
    }

    add();