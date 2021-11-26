const fs = require("fs");


//SPACE FILE PARSER
const spaceParse = (file) => {
    var inputFile = fs.readFileSync(file, 'utf8' )
    var arr = inputFile.replace(/[ \n]/g, ",").replace(/[-]/g, "/").replace(/F/g, "Female").split(",")
    var len = arr.length
    var parsedFile = [];
    //Rearranging to specifications
    for(let i = 0; i < len; i+=6) { 
        parsedFile.push({
            lastName: arr[i],
            firstName: arr[i+1],
            //middleInitial: arr[i+2],
            gender: arr[i+3],
            dateOfBirth: arr[i+4],
            favoriteColor: arr[i+5], //by replacing this with ln 19 fulfills final output sort
        });
    }
    return parsedFile
}

module.exports = { spaceParse };