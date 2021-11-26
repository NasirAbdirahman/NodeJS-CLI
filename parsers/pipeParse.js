const fs = require("fs");


//PIPE FILE PARSER
const pipeParse = (file) => {
    var inputFile = fs.readFileSync(file, 'utf8')
    var arr = inputFile.replace(/[\n\|]/g, ',').replace(/[\s+]/g, '').replace(/M/g, "Male").replace(/[-]/g, "/").split(",")
    var len = arr.length
    var parsedFile = [];
    //Rearranging to specifications
    for(let i = 0; i < len; i+=6) {
        parsedFile.push({
            lastName: arr[i],
            firstName: arr[i+1],
            //middleInitial: arr[i+2],
            gender: arr[i+3],
            dateOfBirth: arr[i+5],
            favoriteColor: arr[i+4],
        });
    }
    return parsedFile
}

module.exports = { pipeParse };