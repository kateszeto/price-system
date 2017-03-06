# price-system

Applying for Link Apprenticeship for Woman-identified Developers #1 Coding test

It is developed in javascript. No library required.

priceCalculator is the main function with 3 parameters: 
bPrice -- Base Price, 
pp -- No. of persons involved, 
cat -- Material category code. "PH" for pharmacy type, "FD" for food type, "EL" for electronic type, "OT" for all other types

priceCalculator return a float number with 2 decimal places

test is the test function. return boolean values. true -- pass, false -- failed

Test examples:

console.log("the result is: "+test(priceCalculator(5432.00,1,"PH"),6199.81));

console.log("the result is: "+test(priceCalculator(1299.99,3,"FD"),1591.58));

console.log("the result is: "+test(priceCalculator(12456.95,4,"OT"),13707.63));




