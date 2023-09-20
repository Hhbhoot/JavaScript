let x = 496;
let sum = 0;
function PerfectNumber() {

    for (let i = 1; i < x; i++) {

        if (x % i === 0) {
            sum += i;
        }
    }
    if (sum == x) {
        console.log("The Number Is Perfect..")
    }
    else {
        console.log("The Number Is Not Perfect.");
    }
}




PerfectNumber(x);
