let a = 0 ;
let b= 0 ;
let sum = 1 ;

for(let i = 1 ; i<=10 ; i++)
{
    console.log(sum);
    a=b;
    b=sum;
    sum=a+b;
}