//CONVERTS BACK TO REQUIRED OUTPUT
function JsonToText (arr) {
    var txt = arr.map(row => Object.values(row)).join("\n").replace(/,/g, " ");
    return txt + '\n';
}

module.exports = { JsonToText };