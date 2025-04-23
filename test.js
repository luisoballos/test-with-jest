test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const euros = 3.5;
    const dollars = fromEuroToDollar(euros);
    const yens = fromDollarToYen(dollars);
    const pounds = fromYenToPound(yens);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; // 3.745
    const expected2 = 3.5 * 156.5; // 547.75
    const expected3 = 3.5 * 0.87; // 8.045
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(euros)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
     expect(fromDollarToYen(dollars)).toBe(expected2);
     expect(fromYenToPound(yens)).toBe(expected3);
})