#!/usr/bin/env node
const { SortOne, SortTwo, SortThree } = require("../converters/index")
const { commaParse, spaceParse, pipeParse } = require('../parsers/index')


//FUNCTION THAT TAKES INPUT FILES(AS ARGS.) AND OUTPUTS STREAM
function OutputStream (commaFile,spaceFile,pipeFile) {
    var arr = []
    var commaFile = commaParse.commaParse(commaFile)
    var spaceFile = spaceParse.spaceParse(spaceFile)
    var pipeFile = pipeParse.pipeParse(pipeFile)
    var finalOutput = arr.concat(commaFile,spaceFile,pipeFile) //push() works too
    
    return (
        console.log(SortOne.SortOne(finalOutput)) + console.log(SortTwo.SortTwo(finalOutput)) + console.log(SortThree.SortThree(finalOutput))
    )
}

var commaFile = 'files/comma.txt'
var spaceFile = 'files/space.txt'
var pipeFile = 'files/pipe.txt'
OutputStream(commaFile,spaceFile,pipeFile)


//---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------

/*
//VERSION 2 INITIALIZES FILES WITHIN THE FUNCTION
function OutputStream (commaFile,spaceFile,pipeFile) {
    var commaFile = 'files/comma.txt'
    var spaceFile = 'files/space.txt'
    var pipeFile = 'files/pipe.txt'
    var arr = []
    var commaFile = commaParse.commaParse(commaFile)//commaParse('files/comma.txt')
    var spaceFile = spaceParse.spaceParse(spaceFile)//spaceParse('files/space.txt')
    var pipeFile = pipeParse.pipeParse(pipeFile)//pipeParse('files/pipe.txt')
    var finalOutput = arr.concat(commaFile,spaceFile,pipeFile) //push() works too
    
    return (
        console.log(SortOne.SortOne(finalOutput)) + console.log(SortTwo.SortTwo(finalOutput)) + console.log(SortThree.SortThree(finalOutput))
    )
   
}

OutputStream(commaFile,spaceFile,pipeFile)*/