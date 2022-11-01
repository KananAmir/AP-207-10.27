using ConsoleApp8;
using System;

//STRING LENGTH

//string country = "Azerbaijan";

//for (int i = 0; i < country.Length; i++)
//{
//Console.WriteLine(country[i]);
   //Console.Write(country[i]);
//}



// NESTED FOR

//for (int i = 0; i <= 8; i++)
//{
//    for (int j = 0; j <= 3; j++)
//    {
//Console.Write("*");
//        Console.Write($"    {i}, {j}    ");

//    }
//    Console.WriteLine();
//}



// SONSUZ LOOP

//for (; ; )
//{
//    Console.WriteLine("Salamlar!!");
//}



//ARRAYS

//string[] cities = { "Baku", "Istanbul", "Sumqayit"};

//Console.WriteLine(cities[0]);
//Console.WriteLine(cities.Length);

//for (int i = 0; i < cities.Length; i++)
//{
//    Console.WriteLine(cities[i]);
//}


//INITIALIZE ARRAY WITH LENGTH 10

//int[] numbers = new int[10];


//numbers[0] = 15;

//Console.WriteLine(numbers.Length);

//Console.WriteLine(numbers[0]);



// ADDING ONE ELEMENT TO THE END OF ARRAY

//int[] nums = { 1, 7, 15, 28, 14 };

//Console.WriteLine(nums.Length);

//Console.WriteLine(nums[0]);

//Array.Resize(ref nums, nums.Length + 1);

//nums[5] = 777;
//Console.WriteLine(nums[5]);


//for (int i = 0; i < nums.Length; i++)
//{
//    Console.WriteLine(nums[i]);
//}


//CREATING person1 OBJECT FROM Person CLASS
Person person1 = new Person("Emil", "Baxisov", 25);

Console.WriteLine(person1.firstName);
Console.WriteLine(person1.lastName);
Console.WriteLine(person1.age);

