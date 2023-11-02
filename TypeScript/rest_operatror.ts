
function product(...args) {
     
    let p =1 ;

    for ( let i of args)
    {
        p *=i;
    }

    return p ;
}

let x = product(1,2,3,4,5,6);

console.log(x);