let salary = 10000 ;
if(salary<=5000)
{    
    salary = salary + 0.08 * salary + 0.2 * salary    // hra = 8%  da = 20 %
    console.log("Your Net salary is :",salary)  ;
}

else if(salary>5000 && salary <= 10000)
{
    salary = salary + 0.12 *salary + 0.3 * salary ;
    console.log("Your Net salary is :",salary)  ;
}

else if (salary > 10000 && salary <= 15000)
{
    salary = salary + 0.15 * salary + 0.4 * salary;
    console.log("Your Net salary is :",salary)  ;
}
else{
    salary = salary + 0.2 * salary + 0.5 * salary ;
    console.log("Your Net salary is :",salary)  ;
}
    
    
