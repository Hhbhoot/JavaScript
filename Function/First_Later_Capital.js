let string = "hello world";

function uppercase(string){

    let arr = string.split(",");
    console.log(arr);
    let txt = "";

    for(let i = 0 ; i  < arr.length ; i++)

    {
       i[0] = i[0].toUpperCase();

       txt = txt + arr[i];
    }
    
    console.log(txt);
}

uppercase(string);