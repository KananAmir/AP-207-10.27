// accessing characters of string

let country = "Azerbaijan";
let city = "Baku";

// console.log(country[0])
// console.log(country[3])

// console.log(country.length)

// console.log(country[country.length-1])
// console.log(city[city.length-1])


// for(let i=0; i<country.length; i++){
//     console.log(country[i])
// }



//nested for (iç içə for)

// for(let i = 0; i < 10; i++){
//     for(let j = 0; j < 10; j++){
//         console.log("*")
//     }
// }



// sonsuz loop with while
// while(true){
//     console.log("Hello World!")
// }



// sonsuz loop with for
// for( ; ; ){
//     console.log("Salamlar!!")
// }


//arrays

let students = ["Araz", "Sunay", "Sahar", "Fezile", "Shamil", "Leyla","Emil" ];

// arrayin uzunlugu
console.log(students.length)

// adding elements to the end of array
students[students.length] = "Ilgar"

// students arrayinin 1 index-li (yeni 2-ci) elementi
console.log(students[1]);


console.log("student arrayinin olcusu: ", students.length);


// arrayin son elementi
console.log(students[students.length - 1]);

//updating first element of student array from "Araz" to "Gulare"
students[0] = "Gulare";

//adding element to the end of array
students.push("Ali");


for(let i=0; i<students.length; i++){
    console.log(students[i]);
}


//objects
// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName,
//         this.lastName = lastName,
//         this.age = age
//     }
// }

// let person1 = new Person("Emil", "Baxishov", 14);

// person1.city = "Quba"
// console.log(person1.lastName)
// console.log(person1)

// let person = {
//     firstName: "Kanan",
//     lastName: "Amirov",
//     age: 55,
//     skils: [
//         "HTML",
//         "CSS",
//         "sdasdsa"
//     ]
// }

// console.log(person)
// person.fatherName = "Ilham";
// person.city = "London";

// console.log(person.lastName)
// console.log(person)