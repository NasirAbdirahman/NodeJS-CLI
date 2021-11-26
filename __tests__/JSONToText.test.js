const { JsonToText } = require("../converters/JSONToText");

//CONVERTER TEST


test('Returns a txt output', () => {
    const arr = [{lastName: 'Seles',firstName: 'Monica',gender: 'Female',dateOfBirth: '12/2/1973',favoriteColor: 'Black'}];//Mock Array
    expect(JsonToText(arr)).toBe("Seles Monica Female 12/2/1973 Black\n")
});