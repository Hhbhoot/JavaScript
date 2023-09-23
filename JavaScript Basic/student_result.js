let maths = 86 , physics = 86 , chemistry = 85 ;
let total , grade , pr ;

total = maths + physics + chemistry ;
pr = (total * 100)/300;

if(pr >= 70)
{
     grade = "A";
    console.log("Maths\tPhysics\tchemistry\ttotal\tpercentage\tgrade")
    console.log(maths,physics,chemistry,total,pr,grade);
}
else if(pr > 60 && pr < 70)
{
     grade = "B";
    console.log("Maths\tPhysics\tchemistry\ttotal\tpercentage\tgrade")
    console.log(maths,physics,chemistry,total,pr,grade);
}
else if(pr>40 && pr<= 60)
{
     grade = "C";
    console.log("Maths\tPhysics\tchemistry\ttotal\tpercentage\tgrade")
    console.log(maths,physics,chemistry,total,pr,grade);
}
else if(pr >=33 && pr<=40)
{
     grade = "D";
    console.log("Maths\tPhysics\tchemistry\ttotal\tpercentagetgrade")
    console.log(maths,physics,chemistry,total,pr,grade);
}
if(pr <33)
{
   console.log("You are fail ");
}