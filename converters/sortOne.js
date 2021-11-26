const convert = require('./JSONToText')


//BY GENDER(FEMALES FIRST) THEN BY LASTNAME ASCENDING
function SortOne(arr) {
    const genderSorter = (a,b) => {
        if(a.gender < b.gender){
            return -1;
        }
        if(a.gender > b.gender){
            return 1;
        }
        if(a.lastName < b.lastName){
            return -1;
        }
        if(a.lastName > b.lastName){
            return 1;
        }
    }
    var sortArr = arr.sort(genderSorter)

    return(
        console.log("Output 1:") + convert.JsonToText(sortArr)
    )
}

module.exports = { SortOne };