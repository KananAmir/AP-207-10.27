// See https://aka.ms/new-console-template for more information
using System;

int[] numbers = { 24, 35, 78, 11, 87, 24, 111};

//int key = 35;

//for (int i = 0; i < numbers.Length; i++)
//{
//    if (key == numbers[i])
//    {
//        Console.Write("Yes we found", numbers[i]);
//        break;
//    }
//    if (i == numbers.Length - 1)
//    {
//        Console.WriteLine("Not found");
//    }
//}

Array.Sort(numbers);

for(int i = 0; i<numbers.Length; i++)
{
    Console.WriteLine(numbers[i]);
}
