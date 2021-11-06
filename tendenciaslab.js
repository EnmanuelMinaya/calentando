//24. Find the largest and smallest number in an unsorted integer array

let arr = [-5, 100, 10, 15, 20, -4];

let largest = arr[0];
let smallest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest)
        largest = arr[i];
    if (arr[i] < smallest)
        smallest = arr[i];
}

console.log(largest);
console.log(smallest);


//29. Convert numeric String to an int without libraries: "125" -> 125, "0025" -> 25


function StringNumtoNumInt(s) {
    let value = 0;
    let sign = 1;
    let ndx = 0;
    let len = s.length;

    if (s[0] === '-') {
        sign = -1;
        ndx = 1;
    }

    while (ndx < len) {
        let c = s[ndx];
        if (c >= '0' || c <= '9') {
            value = value * 10 + c.charCodeAt(0) - 48; // 48 = '0'

        }
        ndx++;
    }
    return sign * value;
}
console.log(StringNumtoNumInt("-433"))
console.log(typeof (StringNumtoNumInt("-433")))
