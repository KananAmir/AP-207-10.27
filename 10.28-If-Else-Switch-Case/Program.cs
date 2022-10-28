
using System;

int age = 17;
string city1 = "Gence";
string city2 = "Sumqayit";

//if (age >= 16 && city1 == "Gence")
//{
//    Console.WriteLine("age > 16, city is Baku");
//}
//else if (age >= 16 && city2 == "Sumqayit")
//{
//    Console.WriteLine("age > 16, city is Sum");
//}
//else
//{
//    Console.WriteLine("Test");
//}

//if (age >= 16)
//{
//    if (city1 == "Baku")
//    {
//        Console.WriteLine("age > 16, city is Baku");
//    }
//    else
//    {
//        Console.WriteLine("Yas uygundur amma seher uygun deyi");
//    }
//}



//if (age >= 16)
//{
//    Console.WriteLine("Xoş gəlmisiniz!!");
//}
//else
//{
//    Console.WriteLine("Boyuyende gelersen :)");
//}


int  weekDay = 5;

switch(weekDay){
    case 0: Console.WriteLine ("Today is Sunday");
    break;
    case 1:
        Console.WriteLine("Today is Monday");
    break;
    case 2:
        Console.WriteLine("Today is Tuesday");
    break;
    case 3:
        Console.WriteLine("Today is Wednesday");
    break;
    case 4:
        Console.WriteLine("Today is Thursday");
    break;
    case 5:
        Console.WriteLine("Today is Friday");
    break;
    case 6:
        Console.WriteLine("Today is Saturday");
    break;
    default:
        Console.WriteLine("There is no such weekday");
        break;
}