let income = 10200 ;
let tax ;

if(income <= 2500)
{
    tax = 0;
    console.log("Your Tax is ;",tax);
}

else if(income > 2500 && income <= 5000)
{
    tax = 0.1 * income ;
    console.log("Your Tax is ;",tax);

}

else if(income >5000 && income <= 10000)
{
    tax  = 250 + (income  - 5500) * 0.2 ;
    console.log("Your Tax is ;",tax);
}

else{
    tax = 250 + 1000 + (income - 10000);
    console.log("Your Tax is ;",tax);
}