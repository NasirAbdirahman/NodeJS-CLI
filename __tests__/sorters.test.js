const { SortOne } = require("../converters/sortOne");
const { SortTwo } = require("../converters/sortTwo");
const { SortThree } = require("../converters/sortThree");


// SORT FUNCTION TESTS


//All tests Grouped Together
describe("Testing The Sorting Functions", () => {
  // initialize Mock Array for test
  const testArr =  [{
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

  //initialize test data before the tests are run
  beforeAll(() => {
    sortOne = "Kelly Sue Female 7/12/1959 Pink\nAbercrombie Neil Male 2/13/1943 Tan\nBishop Timothy Male 4/23/1967 Yellow"
    sortTwo = "Abercrombie Neil Male 2/13/1943 Tan\nKelly Sue Female 7/12/1959 Pink\nBishop Timothy Male 4/23/1967 Yellow"
    sortThree = "Kelly Sue Female 7/12/1959 Pink\nBishop Timothy Male 4/23/1967 Yellow\nAbercrombie Neil Male 2/13/1943 Tan"
  })
  
  
   
  test('RETURNS AN ARRAY SORTED BY GENDER(FEMALES FIRST) THEN BY LASTNAME ASCENDING', () => {
    expect(SortOne(testArr)).toMatch(sortOne)
  });


  test('RETURNS AN ARRAY SORTED BY BIRTHDAY, THEN BY LASTNAME ASCENDING', () => {
    expect(SortTwo(testArr)).toMatch(sortTwo)
  });


  test('RETURNS AN ARRAY SORTED BY LASTNAME DESCENDING', () => {
    expect(SortThree(testArr)).toMatch(sortThree)
  });

});