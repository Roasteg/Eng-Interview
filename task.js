
function reverseString(string) {
    return string.split("").reverse().join("").replace(" ", "").toLowerCase();
}

function checkPalindrome(string) {
    return string.toLowerCase().replace(" ", "") == reverseString(string);
}

function multiplicationTable(int) {
    for (i = 1; i < 10; i++) {
        console.log(`${int} X ${i} = ${int * i}`);
    }
}

function maxminarr(arr) {
    let min = arr[0];
    let max = arr[0];
    arr.forEach(i => {
        if (i > max) {
            max = i;
        }
        if (i < min) {
            min = i;
        }
    });
    console.log(`Min = ${min}, Max = ${max}`);
}

function largestgiven(arr) {
    let max = arr[0];
    if (arr.length <= 3) {
        arr.forEach(i => {
            if (i > max) {
                max = i;
            }
        });
        console.log(`Max = ${max}`);
    } else {
        console.log("Too many elements!")
    }

}

function arraysum(string) {
    arr = string.split("");
    let result = "0";
    arr.forEach(i => {
        result = parseInt(result) + parseInt(i)
    });
    console.log(`The sum is ${result}`)
}

function pyramid(int) {
    let asterisk = "*";
    let whitespace = " ";
    for (i = 1; i < int + 1; i++) {
        if (i % 2 != 0) {
            let number = (int - i) / 2;
            console.log(`${whitespace.repeat(number)} ${asterisk.repeat(i)}`)
        }
    }
}

function evenodd(int) {
    if (int % 2 == 0) {
        console.log(`${int} is even`)
    }
    else {
        console.log(`${int} is not even`)
    }

}

console.log(reverseString("Hello"));
console.log(checkPalindrome("Taco Cat"));
multiplicationTable(4);
maxminarr([1, 2, 3, 4]);
largestgiven([51, 63, 15]);
arraysum("68123");
pyramid(5); //It's better to put odd number here
evenodd(61)