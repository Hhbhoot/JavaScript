let x = "123" ;
function Rev(x) {
    
    let txt = "";
    for(let i = x.length -1 ; i >= 0 ; i--)
    {
        txt +=  x[i] + " "; 

    }
    
     console.log(txt);
}

Rev(x);
