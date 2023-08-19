let unit = 10;
let bill;
if (unit <= 100) {

  bill = 0.6 * unit;
  if(bill <50) {
    console.log("Your bill : 50 ");
  }
  else{
    console.log("Your bill : ", bill);
  }


} 
else if (unit > 100 && unit <= 300) {
  bill = 60 + (unit - 100) * 0.8;
  console.log("Your bill :", bill);

} 
else if (unit > 300) {
  bill = 60 + 160 + (unit - 300) * 0.9;

  if (bill > 300) {
    bill = bill + 0.15 * bill;
  }
  console.log("Your bill :", bill);
}


