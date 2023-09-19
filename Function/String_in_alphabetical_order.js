let string = "hdsgjhdfaguj";

function arrange(string) {

    let arr = string;
    let char = arr.split("");

    char.sort();
    console.log(char);

    let txt = "";

    for (let i = 0; i < char.length; i++) {
        txt += char[i];
    }
    console.log(txt);
}

arrange(string)