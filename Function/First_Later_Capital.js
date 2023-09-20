let string = "hello world good morning";
let txt = "";

function uppercase(string) {

    let arr = string.split(" ");
    console.log(arr);

    let length = arr.length;
    // console.log(length);

    for (let i = 0; i < arr.length; i++) {

        let arr1 = arr[i].charAt(0).toUpperCase();
        let arr2 = arr[i].slice(1);

        txt += arr1 + arr2 + " ";
    }
    console.log(txt)
}

uppercase(string);