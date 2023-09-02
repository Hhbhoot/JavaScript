let a = "1234" ;

function rev(a){
    let t = ""
    for(let i=a.length-1; i>=0;i--){
        t = t + a[i];
    }
    console.log(t);
}
rev(a);