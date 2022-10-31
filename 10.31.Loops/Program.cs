// See https://aka.ms/new-console-template for more information
using System;

//for loop

//for (int i = 1; i <= 10; i++)
//{
//    Console.WriteLine("Hello, World!");
//    Console.WriteLine(i);

//}


//while loop

//int n = 0;
//while (n < 10)
//{
//    n++;
//    if (n == 5)
//    {
//        Console.WriteLine("Salam");
//        continue;
//    }
//    else
//    {
//        Console.WriteLine(n);
//    }

//}


//break keyword

//int n = 1;
//while (true)
//{
//    n++;
//    if (n == 1001)
//    {
//        break;
//    }
//    else
//    {
//        Console.WriteLine(n);
//    }
//}


//do while

//int n = 1;
//do
//{
//    Console.WriteLine(n);
//    n++; // n = n +1;
//} while (n <=10 );


//min ve max arasinda cut edeler

int min = 17;
int max = 129;
int i;
for (i = min; i <= max; i++)
{
    if (i % 2 == 0)
    {
        Console.WriteLine($"BU CUT EDEDDIR: {i}");
    }
}
