#!/usr/bin/env node
//VERSION 2 OF INDEX.JS--HAS ALL CONVERSION IN ONE FUNCTION
const fs = require("fs");
const sort = require("../converters/sorters");

//MAIN FUNCTION THAT TURNS INPUT FILE INTO JSON
function InputFile () {
    //Final Array
    var mergedArr = [];

    //COMMA FILE PARSED
    var a = fs.readFileSync('files/comma.txt', 'utf8')
    var arr = a.replace(/\n/g, ",").replace(/ /g, "").split(",")
    var len = arr.length
    for(let i = 0; i < len; i+=5) {
        mergedArr.push({
            lastName: arr[i],
            firstName: arr[i+1],
            gender: arr[i+2],
            dateOfBirth: arr[i+4],
            favoriteColor: arr[i+3],
        });
    }   

    //SPACE FILE PARSED
    var b = fs.readFileSync('files/space.txt', 'utf8' )
    var arr = b.replace(/[ \n]/g, ",").replace(/[-]/g, "/").replace(/F/g, "Female").split(",")
    var len = arr.length
    for(let i = 0; i < len; i+=6) { 
        mergedArr.push({
            lastName: arr[i],
            firstName: arr[i+1],
            gender: arr[i+3],
            dateOfBirth: arr[i+4],
            favoriteColor: arr[i+5],
        });
    }
    
    //PIPE FILE PARSED
    var c = fs.readFileSync('files/pipe.txt', 'utf8')
    var arr = c.replace(/[\n\|]/g, ',').replace(/[\s+]/g, '').replace(/M/g, "Male").replace(/[-]/g, "/").split(",")
    var len = arr.length
    for(let i = 0; i < len; i+=6) {
        mergedArr.push({
            lastName: arr[i],
            firstName: arr[i+1],
            gender: arr[i+3],
            dateOfBirth: arr[i+5],
            favoriteColor: arr[i+4],
        });
    }
    
    
    //Output Logged
    console.log(sort.SortOne(mergedArr))
    console.log(sort.SortTwo(mergedArr))
    console.log(sort.SortThree(mergedArr))

}
InputFile()

module.exports = { InputFile };
//TO RUN IN MAC TERMINAL-- FILES MUST HAVE ../