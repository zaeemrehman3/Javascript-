// Chapter 1
// Q1:

// alert("Welcome to my Website,Thanks for Visiting.");

// Q2:

// alert("Error! Please Enter a Valid Password.");

// Q3:

// alert('Welcome to JS Land... \n Happy Coding!');

// Q4:
 
// alert('Welcome to JS land');
// alert('Happy coding! \n Prevent this page from additional dialogs');

// Q5: 
// Simple you create popup by usning console when you inspect the page, simply type alert('') and type message between the brackets 



// Chapter 2
// Q1:

// var userName = " ";

// Q2:

// var userName = 'Zaeem Rehman';

// Q3:

// var message = 'Hello World';
// alert(message)

// Q4:

// var firstName = 'John Doe';
// alert(firstName)

// var age = ( 15 + "years old");
// alert(age)

// var message = 'Certified Mobile Application Development';
// alert(message)

// Q5:

// alert('Pizza \n Pizz \n Piz \n Pi \n P');

// Q6:

// var email = 'My email address is zaeemrehman39@gmail.com';
// alert(email)

// Q7:

// var book = 'i am tyring to learn from the book. A smarter \n way to learn javascript';
// alert(book)

// Q8:

// document.body.innerHTML = 'Yah! i can write content through javascript';



// Chapter 3
// Q1:

// var age = 18;
// alert( ' I am ' + age + ' Years Old ' );

// Q2:

// var number = 14;
// alert( ' You have visited this site ' + number + ' times ' );

// Q3:

// var birthYear = 2005;
// document.body.innerHTML = 'My birth year is 2005 <br\> data type of my declared variable is number';



// Chapter 4
// Q1:

// var a, b, c

// Q2:

// Legal Variable:

// var myVariable
// var _myVariable
// var $myVariable
// var myVariable12
// var my_variable
// var va12riable

// Illegal Variable:

// var 12myVariable
// var my Variable 
// var my-Variable
// var !myVariable
// var @myVariable

// Q3:

// Rules for Variables:-
// 1-Varible can only start with letters not number
// 2-No special characters use in the stating of variable except two characters i.e "$" and "_"
// 3-Javascript is case sensitive programming language if you dont follow the syntax rules accuratley you will get Error!


// Chapter 5
// Q1:

// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter second number"));
// var total = num1 + num2;
// document.write("Sum of " + num1 + " and " + num2 + " is " + total);

// Q2:

// multiplication:-
// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter second number"));
// var total = num1 * num2;
// document.write("product of " + num1 + " and " + num2 + " is " + total);

// division:-
// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter second number"));
// var total = num1 / num2;
// document.write("divide of " + num1 + " and " + num2 + " is " + total);

// subtraction:-
// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter second number"));
// var total = num1 - num2;
// document.write("subtract of " + num1 + " and " + num2 + " is " + total);

// modulus:-
// var num1 = parseInt(prompt("enter first number"));
// var num2 = parseInt(prompt("enter second number"));
// var total = num1 % num2;
// document.write("modulus of " + num1 + " and " + num2 + " is " + total);

// Q4:-

// var moviePrice = 600;
// var quantity = 5;
// var total = moviePrice * quantity;
// document.write(
//   "Total cost to buy " + quantity + " tickets to a movie is " + total +"PKR"
// );

// Q5:-

// var num = parseInt(prompt("enter a num for table"));

// document.write(
//   "Table of " +
//     num +
//     "<br>" +
//     num +
//     " X " +
//     1 +
//     "=" +
//     num * 1 +
//     "<br>" +
//     num +
//     " X " +
//     2 +
//     "=" +
//     num * 2 +
//     "<br>" +
//     num +
//     " X " +
//     3 +
//     "=" +
//     num * 3 +
//     "<br>" +
//     num +
//     " X " +
//     4 +
//     "=" +
//     num * 4 +
//     "<br>" +
//     num +
//     " X " +
//     5 +
//     "=" +
//     num * 5 +
//     "<br>" +
//     num +
//     " X " +
//     6 +
//     "=" +
//     num * 6 +
//     "<br>" +
//     num +
//     " X " +
//     7 +
//     "=" +
//     num * 7 +
//     "<br>" +
//     num +
//     " X " +
//     8 +
//     "=" +
//     num * 8 +
//     "<br>" +
//     num +
//     " X " +
//     9 +
//     "=" +
//     num * 9 +
//     "<br>" +
//     num +
//     " X " +
//     10 +
//     "=" +
//     num * 10
// );

// Q6:-

// var farenhiet = parseInt(prompt("enter Farenhiet temprature "));
// var celcius = parseInt(prompt("enter celcius tempreture"));
// var conversion1 = ((farenhiet - 32) * 5) / 9;
// var conversion2 = (celcius * 9) / 5 + 32;
// document.write(
//   celcius +
//     "°C is " +
//     conversion2 +
//     "°F" +
//     "<br>" +
//     farenhiet +
//     "°F is " +
//     conversion1 +
//     "°C "
// );

// Q7:-

// var item1 = 650;
// var item2 = 100;
// var Shipping = 100;

// var quantityItem1 = parseInt(prompt("enter the product first quantity"));
// var quantityItem2 = parseInt(prompt("enter the product second quantity"));

// var total1 = item1 * quantityItem1;
// var total2 = item2 * quantityItem2;
// var finalTotal = total1 + total2 + Shipping;

// document.write("<h1 style=font-size: 3rem;>Shopping Cart</h1>");

// document.write("<br><br>Price of product 1 is " + item1);
// document.write("<br>quantity of product 1 is " + quantityItem1);

// document.write("<br>Price of product 2 is " + item2);
// document.write("<br>quantity of product 2 is " + quantityItem2);

// document.write(" <br>shipping charges " + Shipping);
// document.write("<br><br><br>Your total of order is " + finalTotal);

// Q8:

// var totalMarks = 1000;
// var marksObtained = parseInt(prompt("enter the obtained marks "));

// var percentage = (marksObtained / totalMarks) * 100;
// document.write("<h1 style=font-size: 3rem;>MarkSheet </h1><br><br><br><br>");

// document.write("Total Marks are : " + totalMarks);
// document.write("<br>Obtained Marks are : " + marksObtained);
// document.write("<br>Percentage obtained is : " + percentage +"%");

// Q9:

// var usd = 104.8;
// var riyal = 28;

// var usdQuantity = parseInt(prompt("enter usd quantity"));
// var riyalQuantity = parseInt(prompt("enter riyal quantity"));

// var total1 = usdQuantity * usd;
// var total2 = riyalQuantity * riyal;
// var final = total1 + total2;

// document.write(
//   "<h1 style=font-size: 3rem;>Currency in PKR</h1><br><br><br><br>"
// );
// document.write("Total Currency in PKR : " + final);

// Q10:

// var num = 645137463489;

// var expression = ((num + 5) * 10) / 2;

// document.write(expression);

// Q11:

// var currentYear = parseInt(prompt("enter current year "));
// var birthYear = parseInt(prompt(" enter your birth year "));
// var totalAge = currentYear - birthYear;

// document.write(
//   "<h1 style=font-size: 3rem;>Age calculator </h1><br><br><br><br>"
// );
// document.write("Current Year : " + currentYear);
// document.write(" <br>birth Year : " + birthYear);
// document.write(" <br> Your current Age is :" + totalAge);

// Q12:

// var radius = parseInt(prompt("enter a radius "));
// var circumfrance = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.write(
//   "<h1 style=font-size: 3rem;>The Geometrizer </h1><br><br><br><br>"
// );
// document.write("<br>Radius of the circle is :" + radius);
// document.write("<br>Circumfrance of the circle is :" + circumfrance);
// document.write("<br>The area of circle is  :" + area);

// Q13:

// var snack = prompt("enter your favourite Snack ");
// var age = parseInt(prompt("enter your Age "));
// var maxAge = parseInt(prompt("enter your Estimated Maximum age "));
// var snackPerDay = parseInt(
//   prompt("enter your amount of the snacks you consume per day  ")
// );
// var need = (maxAge - age) * snackPerDay;

// document.write(
//   "<h1 style=font-size: 3rem;>The life time supply calculator  </h1><br><br><br><br>"
// );
// document.write("<br>Favourite Snack is :" + snack);
// document.write("<br>Age is :" + age);
// document.write("<br>Estimated Maximum Age  is  :" + maxAge);
// document.write("<br>Amount of snacks per day :" + snackPerDay);
// document.write(
//   "<br> You will need " + need + " " + snack + " to last you until " + maxAge
// );









