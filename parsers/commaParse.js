const fs = require("fs");


//COMMA FILE PARSED
const commaParse = (file) => {
    var inputFile = fs.readFileSync(file, 'utf8')
    var arr = inputFile.replace(/\n/g, ",").replace(/ /g, "").split(",")
    var len = arr.length
    var parsedFile = [];
    //Rearranging to specifications
    for(let i = 0; i < len; i+=5) {
        parsedFile.push({
            lastName: arr[i],
            firstName: arr[i+1],
            gender: arr[i+2],
            dateOfBirth: arr[i+4],
            favoriteColor: arr[i+3],
        });
    }
    return parsedFile

}  


module.exports = { commaParse };