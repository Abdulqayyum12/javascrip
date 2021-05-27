 //chapter1 1
 
//Q1) Write a script to greet your website visitor using JS alert box. 
alert("Hello Word.")


//Q2) Write a script to display following message on your web page
alert("Error! Please enter a valid password.")



//Q3) Write a script to display following message on your web page (Hint : Use line break)
alert("Welcome to js land... \n Happy Coding !")



//Q4) Write a script to display following messages in sequence
alert("Welcome to Js Land...")
alert("Happy Coding !")



//Q5) Generate the following message through browser’sdeveloper console
alert("Hello! I can run Js through my web browser's console")



//Q6) Make use of alerts in your new/existing HTML & CSS project.
//Q7) Practice placement of <script></script> element infollowing sections of your project in exercise
//a.Head
//b.Body (before your page HTML)
//ALERTS | JAVASCRIPT
// Page 3 of 3
// c. Body (inside your page’s HTML)
// d. Body (after your page’s HTML)


//.......................................................................................................................................................


//chapter 2

//Q1) Declare a variable called username.
 
var  nserName;

//Q2) Declare a variable called myName & assign to it a string that represents your Full Name.
var  myName;
var myName = "Abdul Qayyum";
alert(myName)

//Q3) Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.
var massage = "Hello World"
alert(massage)

//Q4) Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var firstName = "Abdul"
var lastName = "Qayyum"
var age = 20;
alert(firstName + lastName +  age)

//Q5) Write a script to display the following alert using one JS variable
var food = "Pizza. \n Pizz. \n Piz. \n Pi. \n P"
alert(food)
//Q6) Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email = "aq277162@gmail.com"
alert("My Email Address is" + email)
//Q7) Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box
var java = " A smarter way to learn javascript"
alert("i am trying to learn from the book" + java)
//Q8) Write a script to display this in browser through JS
document.write("Yah! I can write HTML contect theough javascript \n")
//Q9) Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
alert("“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”")

//...................................................................................................................................................................................................................................


//chapter 3

//Q1 Declare a variable called age & assign to it your age. Show your age in an alert box
var age = 20
alert("I am "+ age + "Years Old")
//Q2 Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times
alert("You have visited site 14 times")
//Q3 Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser
var year = 199
document.write("My birth year is" + year)
document.write("date type of my declared variable" + typeof year)
//Q4 A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorName = "John Doe  ";
var productTitle = "Ordered  "; 
var orderProducts = 5 ;
document.write(visitorName + productTitle + orderProducts + "T-shirt(s)  " +  "Bonanza Clothing Store");

//.................................................................................................................................................................................


//chapter 4

//Q1) Declare 3 variables in one statement
//Q2) Declare 5 legal & 5 illegal variable names
//Q3) Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

var firstName = "Abdul"
var lastName = "Qayyum"
var age = 20;
alert(firstName + lastName + + age)


// legal variable names.

 //Start them  a letter
//$character
// character
// characternumeric(1 to ...)
// userName  (Camel Case)




 //illegal variable names.
 //& 
 //%
 //1
 //*
 //space







// a) A heading stating “Rules for naming JS variables”

// Variable names cannot contain spaces.
// Variable names must begin with a letter, an underscore _ or a dollar sign $ 
// Variable names can only contain letters, numbers, underscores, or dollar signs.
// Variable names are case-sensitive.


// b) Variable names can only contain __$____, ___(_)___,
// __letters____ and __numbers____.

// c) Variables must begin with a ___letter___, ___$charcater___ or
// __$character___.      For example $name, _name or name

// d) Variable names are case ___Sensitive______

// e) Variable names should not be JS ___(keywords)______






// .....................................................................................................

// Chapter 5


// Q1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.


var sum1 = 10
var sum2 = 15
var sum3 = (sum1+ sum2)
alert(sum3)


// Q2. Repeat task1 for subtraction, multiplication, division &modulus



var sum1 = 10
var sum2 = 15
var sum3 = (sum1*sum2);
alert(sum3);


// Q3. Do the following using JS Mathematic Expressions


var sum1 = 10
var sum2 = 15
var sum3 = (sum1/sum2);
alert(sum3)

// Q4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output



//document.write(TotalCosttoby5ticketstoamovieis3000PKR)



// Q5. Write a script to display multiplication table of any number in your browser. E.g

var i;
for (i=1 ; i<=10 ; i++ ){
    document.write("8" + "x" + i + "=" + i*8 + "<br>")
}


// Q6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.


//document.write(oC =  oF - 32  x 5/9 \n oF = oC x 9/5  + 32)