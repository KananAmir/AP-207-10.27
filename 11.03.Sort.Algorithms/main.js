let a = 5;
let b = 3;

//swapping
// let c;
c = a; // c = 5
a = b;  // a = 3
b = c;  // b = 5

// a = a + b;  // 5 + 3
// b = a - b;  // 8 - 3 = 5
// a = a - b;  // 8 - 5 = 3

// console.log(a)
// console.log(b)


//Bubble Sort

// let numbers = [29,18,15,14,37,17,41,7]; 

// for(let i = 0; i<numbers.length; i++){
//     for(let j = 0; j<numbers.length; j++){
//        if( numbers[j]>numbers[j+1]){
//             let c = numbers[j]; // temp = 29
//             numbers[j] = numbers[j+1]; // 18
//             numbers[j+1] = c; //29
//         }
//     }
// }

// console.log(numbers)



//Selection Sort

let numbers = [29,18,15,14,37,17,41,7]; 

for(let i = 0; i < numbers.length; i++) {
// Finding the smallest number in the subarray
        let minIndex = i;
        for(let j = i+1; j < numbers.length; j++){
        if(numbers[j] < numbers[minIndex]) {
         minIndex=j; 
    }
  }
    if (minIndex != i) {
// Swapping the elements
    let temp = numbers[i]; 
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp; 
}
}
console.log(numbers);


