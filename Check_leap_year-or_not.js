let year = 2100 ;

if((year%4 == 0 && year %100 !=0 ) || year % 400 == 0)
{
    console.log("This Is Leap Year");
}
else{
    console.log("This Is Not Leap Year ")
}