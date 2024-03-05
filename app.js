// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}
// One Dollar is:
let oneDollarIs = {
    "EUR": 0.93, // euro
    "JPY": 110.14, // japan yen
    "GBP": 0.80, // british pound
}
// One Yen is:
let oneYenIs = {
    "EUR": 0.0064, // euro
    "USD": 0.0091, // us dollar
    "GBP": 0.0072, // british pound
}
// One Pound is:
let onePoundIs = {
    "EUR": 1.15, // euro
    "USD": 1.26, // us dollar
    "JPY": 138.19, // japan yen
}

function fromDollarToYen(dollar){
    return dollar * oneDollarIs.JPY;
}
function fromEuroToDollar(euro){
    return euro * oneEuroIs.USD;
}
function fromYenToPound(yen){
    return yen * oneYenIs.GBP;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
