//              Problem 1

let multidimensionalarray = [[], [], []];

multidimensionalarray[0].unshift(0, 1, 2, 3)

multidimensionalarray[1][0] = 1
multidimensionalarray[1][1] = 0
multidimensionalarray[1][2] = 1
multidimensionalarray[1][3] = 2

multidimensionalarray[2].unshift(2, 1, 0, 1)

document.getElementById('ta').innerHTML =
    '<table border="1"><tr><td>' + multidimensionalarray[0][0] + '</td><td>' + multidimensionalarray[0][1] + '</td><td>' + multidimensionalarray[0][2] + '</td><td>' + multidimensionalarray[0][3] + '</td></tr>' +
    '<tr><td>' + multidimensionalarray[1][0] + '</td><td>' + multidimensionalarray[1][1] + '</td><td>' + multidimensionalarray[1][2] + '</td><td>' + multidimensionalarray[1][3] + '</td></tr>' +
    '<tr><td>' + multidimensionalarray[2][0] + '</td><td>' + multidimensionalarray[2][1] + '</td><td>' + multidimensionalarray[2][2] + '</td><td>' + multidimensionalarray[2][3] + '</td></tr></table>';


console.log(multidimensionalarray);

//              Problem 2

let doffdas = []

for (let i = 1; i < 16; i++) {
    console.log(i + 1)
    document.getElementById('ul1').innerHTML += `<div class="div">${i}</div>`
    doffdas.push(i)
}



//              Problem 3

let tablenum1

let tablenum2

let answerr

function get() {
    answerr = ''
    tablenum1 = document.getElementById('t1').value
    tablenum2 = document.getElementById('t2').value

    for (let i = 1; i <= tablenum2; i++) {
        console.log(tablenum1 + ' x ' + i + ' = ' + (i * tablenum1));
        answerr += `<p style='color: #000;'>${tablenum1} x ${i} = ${i * tablenum1}</p>`
        document.getElementById('ans').innerHTML = `Answer:<br>${answerr}`
    }
}


//              Problem 4

let fruits = ['apple', 'banana', 'mango', 'orange',
    'strawberry']

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
    document.getElementById('p4').innerHTML += `<p>${fruits[i].toLowerCase()}</p>`
}

for (let i = 0; i < fruits.length; i++) {
    document.getElementById('p4part2').innerHTML += `<p>Elements at index ${i} is ${fruits[i].toLowerCase()}</p>`
    console.log('Elements at index' + i + ' is ' + fruits[i]);
}






//              Problem 5

// Q no 1




let counting = ''
for (let i = 1; i <= 15; i++) {
    counting = counting + i + ', ';
}

document.getElementById('p5').innerHTML = "Counting: " + '<p>' + counting + '</p>'

console.log("Counting: ", counting);

// Q no 2

let counting2 = ''
for (let j = 10; j > 0; j--) {
    counting2 = counting2 + j
    if (j > 1) {
        counting2 = counting2 + ', '
    }
}

document.getElementById('p5part2').innerHTML = 'Reverse Counting: ' + '<p>' + counting2 + '</p>'

console.log('Reverse Counting: ' + counting2);

// Q no 3

let counting3 = ''


for (let i = 0; i < 11; i++) {
    counting3 = counting3 + i * 2 + ', '
}

document.getElementById('p5part3').innerHTML = "Even: " + '<p>' + counting3 + '</p>'

console.log('Even: ' + counting3);

// Q no 4

let counting4 = []



for (let i = 1; i < 20; i += 2) {
    counting4.push(' ' + i)
}

document.getElementById('p5part4').innerHTML = 'Odd:' + '<p>' + counting4 + '</p>'

console.log('Odd:' + counting4);

// Q no 5

let counting5 = []
let c
for (let i = 1; i <= 10; i++) {
    if (i < 10) {
        c = counting5[i]
    }
    counting5.push(' ' + (i * 2) + 'k')
}

document.getElementById('p5part5').innerHTML = 'Series:' + '<p>' + counting5 + '</p>'

console.log('Series:' + counting5);

//      Problem 6

let bakkery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

function get2() {
    let checkbakkery = document.getElementById('p6t1').value
    let orderMatch = false
    let checkedi
    let checked
    for (let i = 0; i < bakkery.length; i++) {
        if (checkbakkery.toLowerCase() === bakkery[i].toLowerCase()) {
            orderMatch = true
            checkedi = i
            checked = bakkery[i]
            break
        } else {
            orderMatch = false
        }
    }
    let ai
    if (orderMatch === true) {
        ai = checked + ' is available at index ' + checkedi + ' in our bakery'
    } else {
        ai = 'We are sorry this item is not available in our bakery we have only ' + bakkery.join(', ')
    }
    document.getElementById('ans2').innerHTML = `<p class='injs'>Order Details:<br> ${ai}</p>`
    console.log(ai);
}


//                                    Problem 7

//      Wrong way


//  Right way

let greater = [24, 53, 78, 91, 12]

let largest = greater[0];

for (let i = 0; i < greater.length; i++) {
    if (largest < greater[i]) {
        largest = greater[i]; // update largest
    }

    //  204 < 204 = largest ! greater                           //   Condition False            
    //  204 < 53 = largest ! greater                            //   Condition False
    //  204 < 708 = largest = greater = 708                     //   Condition true        
    //  708 < 91 = largest ! greater                            //   Condition False
    //  708 < 12 = largest ! greater                            //   Condition False


}

document.getElementById('p7part1').innerHTML = `<p>${greater.join(', ')}</p> <p>${largest} is greatest</p>`; 

let d = largest + " is greatest";
console.log(d);


//                      Problem 9

let smaller = [24, 53, 78, 91, 12]

let smalleri0 = smaller[0]

for (let i = 0; i < smaller.length; i++) {
    if (smalleri0 > smaller[i]) {
        smalleri0 = smaller[i]
    }
}

console.log(smalleri0 + " is smallest");

document.getElementById('p8part1').innerHTML = `<p>${smaller.join(', ')}</p> <p>${smalleri0} is smallest</p>`; 


//              Problem 10


let print5to100 = []

let print = ''



for (let i = 1; i <= 20; i++) {
    print5to100.push(i * 5)
}

console.log(print5to100);
let pr = ''
for (let i = 0; i < print5to100.length; i++) {
    pr = pr + print5to100[i]
    if (i < (print5to100.length - 1)) {
        pr = pr + ', '
    }
}
document.getElementById('p9part1').innerHTML = '<p>' + pr + '</p>'
console.log(pr);




