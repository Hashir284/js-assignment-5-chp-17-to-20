//              Problem 1

let multidimensionalarray = [[], [], []];

multidimensionalarray[0].unshift(0, 1, 2, 3)

multidimensionalarray[1][0] = 1
multidimensionalarray[1][1] = 0
multidimensionalarray[1][2] = 1
multidimensionalarray[1][3] = 2

multidimensionalarray[2].unshift(2, 1, 0, 1)

console.log(multidimensionalarray);

//              Problem 2

for (let i = 0; i < 10; i++) {
    console.log(i + 1)
}

//              Problem 3

let tablenum1 = 2

let tablenum2 = 10

for (let i = 1; i < tablenum2; i++) {
    console.log(tablenum1 + ' x ' + i + ' = ' + (i * tablenum1));
}

//              Problem 4

let fruits = ['apple', 'banana', 'mango', 'orange',
    'strawberry']

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 0; i < fruits.length; i++) {
    console.log('Elements at index' + i + ' is ' + fruits[i]);
}

//          Practice

// let f = ['apple', 'banana', 'mango', 'orange',
//     'strawberry']
// //              without array
// let s = ''

// for (let i = 0; i < f.length; i++) {
//     s = s + f[i]
//     if (i < (f.length - 1)) {
//         s = s + ','
//     }
// }

// let f = ['apple', 'banana', 'mango', 'orange',
//     'strawberry']
// for(let i= 0; i< f.length; i++){
//     console.log(f[i]);
    
// }


// let f = ['apple', 'banana', 'mango', 'orange', 'strawberry'];
// let s = '';

// for (let i = 0; i < f.length; i++) {
//     if (i > 0) {
//         s = s + ',';
//     }
//     s = s + f[i];
// }

// alert(s);

//     for(let i = 0; i < f.length; i++){

//     }
//     alert(f.join(' '))
//     alert(f.toString())
// alert(s);




//              Problem 5

// Q no 1

// (((let counting = []

// for(let i = 1; i = 15; i++){
//     counting = [i]
// }

// console.log(counting);)))            Wrong


let counting = ''
for (let i = 1; i <= 15; i++) {
    counting = counting + i + ',';
}
console.log("Counting: ", counting);

// Q no 2

let counting2 = ''
for (let j = 10; j > 0; j--) {
    counting2 = counting2 + j + ','
}

console.log('Reverse Counting: ' + counting2);

// Q no 3

let counting3 = ''
// let counting3k = 0

// for(let i = -1; i <= 20; i++){
//     i++
//     counting3 = counting3 + i + ','
// }

// for(let i = 0; counting3k <= 18; i++){
//     counting3k = i*2
//     counting3 = counting3 + counting3k + ','
// }

// console.log(counting3k);
// console.log(counting3);

for (let i = 0; i < 11; i++) {
    counting3 = counting3 + i * 2 + ','
}

console.log('Even: ' + counting3);

// Q no 4

let counting4 = []

// for(let i = 1; i < 10; i++){
//     let j = i+2
//     counting4.push(j)
// }

for (let i = 1; i < 20; i += 2) {
    counting4.push(i)
}

console.log('Odd: ' + counting4);

// Q no 5

let counting5 = []

for (let i = 1; i <= 10; i++) {
    counting5.push(i * 2 + 'k')
}

console.log('Series: ' + counting5);

//      Problem 6

let bakkery = ['cake', 'apple pie', 'cookie', 'chips', 'patties']

let checkbakkery = 'Cake'

let orderMatch = false

let checkedi

let checked

let a

for (let i = 0; i < bakkery.length; i++) {
    if (checkbakkery.toLowerCase() == bakkery[i].toLowerCase()) {
        orderMatch = true
        checkedi = i
        checked = bakkery[i]
        break
    } else {
        orderMatch = false
    }
}

if (orderMatch === true) {
    a = checked + ' is available at index ' + checkedi + ' in our bakery'
} else {
    a = 'We are sorry pastry is not available in our bakery'
}

console.log(a);

//                                    Problem 7

//      Wrong way
//(((((((((((((((((((// let greater = [24, 53, 7657474446, 91, 1562]
// let d

// // let greatorlasti

// for(let i = 0; i < greater.length; i++){
//     if(greater[i] > greater[0] || greater[i] > greater[1] || greater[i] > greater[2] || greater[i] > greater[3] || greater[i] > greater[4] || greater[i] > greater[5]){
//         d = greater[i] + ' is greator'
//     }
// }

// console.log(d);

// console.log(greater);)))))))))))))))))))))

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


//              Problem 10


//  Without using Array

// let print5to100 = 1


// let print = ''

// for(let i = 1; i <= 20; i++){
//     print = print + i*5
//     if(i<20){
//         print = print + ', '
//     }
// }

// for(let i = 1; i <= 20; i++){
//     print = print + i*5 + ', '
// }

//by using Array

let print5to100 = []

let print = ''

// for (let i = 0; i < 20; i++) {
//     print5to100.push((i + 1) * 5)
// }                                    or

for (let i = 1; i <= 20; i++) {
    print5to100.push(i * 5)
}

console.log(print5to100);
let pr = ''
for(let i = 0; i < print5to100.length; i++){
    pr = pr + print5to100[i]
    if(i < (print5to100.length - 1)){
        pr = pr + ','
    }
}
console.log(pr);


