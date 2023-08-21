let n =1;
let m = 10 ;
let txt ="";
do{
    if(n%2==0){
        txt += n*n + " "; 
        n++;
    }
    else{
        txt += n + " ";
        n++;
    }
}while(n<=m);

console.log(txt);