const convert = require('./JSONToText')


//BY LASTNAME DESCENDING
function SortThree(arr) {
    const lastNameSorter = (a,b) => {
        if(a.lastName > b.lastName){
            return -1;
        }
        if(a.lastName < b.lastName){
            return 1;
        }
    }
    var sortArr = arr.sort(lastNameSorter)

    return (
        console.log("Output 3:") + convert.JsonToText(sortArr)
    )
}

module.exports = { SortThree };