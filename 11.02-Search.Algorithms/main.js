//linear search

// let numbers = [24, 35, 78, 11, 87, 24, 111, 224];

// let key = 111;

// for(let i = 0; i < numbers.length; i++){
//     if(key == numbers[i]){
//         console.log("Yes we found", numbers[i])
//         break;
//     }
//     if(i==numbers.length-1){
//         console.log("Not found");
//     }
// }


//Sorting strings

// let cities = ["Baku", "Gence", "Lankaran", "Sumqayit", "Quba"]

// console.log(cities.sort())


//binary search
let numbers = [24, 35, 78, 11, 87, 24, 111, 224];

numbers.sort((a,b) => a-b)  // [ 11, 24,  24, 35,78, 87, 111, 224 ]

// console.log(numbers);

let key = 35;

let minIndex = 0;
let maxIndex = numbers.length - 1;

while(minIndex <= maxIndex){
    let pivot = Math.floor((maxIndex + minIndex)/2);
    if(key == numbers[pivot]){
        console.log("Great you found: ", numbers[pivot])
        break;
    }else if(key < numbers[pivot]){
        maxIndex = pivot - 1;
    }else{
        minIndex = pivot + 1;
    }
    
    if(minIndex == pivot || maxIndex == pivot){
        console.log("Not found!!");
    }
}

// console.log(Math.floor((maxIndex + minIndex)/2));
