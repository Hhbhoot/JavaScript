let string = "Hello World Good Morning rgsfhguhjkfh";

function Longest() {

    let arr = string.split(" ");
    console.log(arr);

    let long = arr[0];
    let length = arr[0].length;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > length) {
            length = arr[i].length;
            word = arr[i];

        }
    }

    console.log(length);
    console.log(word);


}

Longest(string);


