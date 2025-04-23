let oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07,  // US Dollar
    "GBP": 0.87   // British Pound
}

const fromDollarToYen = (dollars) => {
    return (dollars / oneEuroIs.USD) * oneEuroIs.JPY;
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}

const fromYenToPound = (yens) => {
    return (yens / oneEuroIs.JPY) * oneEuroIs.GBP;
}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };