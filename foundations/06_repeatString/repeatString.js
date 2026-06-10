const repeatString = function(inputString,repeatTime) {
    if(repeatTime <= 0)
        return 'The input cannot be equal or less than 0'
    let string = '';
    for(let i = 0; i < repeatTime; i++){
        string += inputString;
    }
    return string;

};


// const repeatString = function (word, times) {
//   if (times < 0) return "ERROR";
//   let string = "";
//   for (let i = 0; i < times; i++) {
//     string += word;
//   }
//   return string;
// };
// Do not edit below this line
module.exports = repeatString;
