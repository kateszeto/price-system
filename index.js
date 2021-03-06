function priceCalculator(bPrice,pp,cat){
  const flatMR = 0.05; //Flat Markup rate
  const labourMR = 0.012; // People Markup rate
  const catMR = {PH : 0.075,
               FD : 0.13,
        EL: 0.02}; // Material Markup rate, use code to define the material type
  
  //Step 0: Check base price
  if(bPrice<=0) return 0;
  
  //Step 1: Calculate the price after flat markup
  var fPrice = +(bPrice * (1+flatMR)).toFixed(2);
  //console.log("the step 1 result is:"+fPrice);
  //Step 2: Calculate the markup including persons
  var labourM = +(fPrice * labourMR * pp).toFixed(2);
  // console.log("the step 2 result is:"+labourM);
  //Step 3: Calculate the material markup
  var materialR;
  if(catMR.hasOwnProperty(cat)){
    materialR = catMR[cat];
  }else{
    materialR = 0;
  }
  var materialM = +(materialR * fPrice).toFixed(2);
  //console.log("the step 3 result is:"+materialM);
  //Step 4: Calcaulate the final price
  var final = Math.round((fPrice + labourM + materialM)*100)/100;
 // console.log("the final result is:"+final);
  return final;
}

function test(testFunc,result){
  if(testFunc===result) return true;
  else return false;
}



//console.log("the result is: "+test(priceCalculator(5432.00,1,"PH"),6199.81));
//console.log("the result is: "+test(priceCalculator(1299.99,3,"FD"),1591.58));
//console.log("the result is: "+test(priceCalculator(12456.95,4,"OT"),13707.63));
