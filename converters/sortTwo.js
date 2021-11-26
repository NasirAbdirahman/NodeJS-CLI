const convert = require('./JSONToText')


//BY BIRTHDAY, THEN BY LASTNAME ASCENDING
function SortTwo(arr) {
    const birthDateSorter = (a,b) => { 
        let c =  a.dateOfBirth.split('/').reverse().join();
        let d = b.dateOfBirth.split('/').reverse().join();
    
        if(c < d ){
            return -1; 
        }
        if (c > d){
            return  1;
        }  
        if(a.lastName < b.lastName){
            return -1;
        }
        if(a.lastName > b.lastName){
            return 1;
        }
    }
    var sortArr = arr.sort(birthDateSorter)

    return  (
        console.log("Output 2:") + convert.JsonToText(sortArr)
    )
}

module.exports = { SortTwo };