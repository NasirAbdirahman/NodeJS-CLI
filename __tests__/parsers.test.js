const {commaParse} = require("../parsers/commaParse");
const {spaceParse} = require("../parsers/spaceParse");
const {pipeParse} = require("../parsers/pipeParse");


//PARSER FUNCTION TESTS


//All tests Grouped Together
describe("Testing The File Parsing Functions", () => {
  //initialize test files 
  const commaFile =('files/comma.txt');
  const pipeFile =('files/pipe.txt');
  const spaceFile =('files/space.txt');

  //initialize test data before the tests are run
  beforeAll(() => {
    commaArr =  [{
      lastName: 'Abercrombie',
      firstName: 'Neil',
      gender: 'Male',
      dateOfBirth: '2/13/1943',
      favoriteColor: 'Tan'
      },{
      lastName: 'Bishop',
      firstName: 'Timothy',
      gender: 'Male',
      dateOfBirth: '4/23/1967',
      favoriteColor: 'Yellow'
      },{
      lastName: 'Kelly',
      firstName: 'Sue',
      gender: 'Female',
      dateOfBirth: '7/12/1959',
      favoriteColor: 'Pink'
    }]
    spaceArr = [{
      lastName: 'Kournikova',
      firstName: 'Anna',
      gender: 'Female',
      dateOfBirth: '6/3/1975',
      favoriteColor: 'Red'
      },{
      lastName: 'Hingis',
      firstName: 'Martina',
      gender: 'Female',
      dateOfBirth: '4/2/1979',
      favoriteColor: 'Green'
      },{
      lastName: 'Seles',
      firstName: 'Monica',
      gender: 'Female',
      dateOfBirth: '12/2/1973',
      favoriteColor: 'Black'
    }]
    pipeArr = [{
      lastName: 'Smith',
      firstName: 'Steve',
      gender: 'Male',
      dateOfBirth: '3/3/1985',
      favoriteColor: 'Red'
      },{
      lastName: 'Bonk',
      firstName: 'Radek',
      gender: 'Male',
      dateOfBirth: '6/3/1975',
      favoriteColor: 'Green'
      },{
      lastName: 'Bouillon',
      firstName: 'Francis',
      gender: 'Male',
      dateOfBirth: '6/3/1975',
      favoriteColor: 'Blue'
    }]
  })


  test("Returns A Rearranged Array from Comma Delimited Text File,Split at Delimiter", () => {
      expect(commaParse(commaFile)).toEqual(commaArr)
  });

  test("Returns A Rearranged Array from Space Delimited Text File,Split at Delimiter", () => {
    expect(spaceParse(spaceFile)).toEqual(spaceArr)
  });

  test("Returns A Rearranged Array from Pipe Delimited Text File,Split at Delimiter", () => {
    expect(pipeParse(pipeFile)).toEqual(pipeArr)
  });

});