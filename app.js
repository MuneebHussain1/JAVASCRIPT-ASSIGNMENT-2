// CHAPTER 6-9

// Q1

// Define the number
var number = 10;

// Perform arithmetic operations
var result = "<h2>Arithmetic Operations</h2>";
result += "<p>Number: " + number + "</p>";
result += "<p>Addition (+ 5): " + (number + 5) + "</p>";
result += "<p>Subtraction (- 3): " + (number - 3) + "</p>";
result += "<p>Multiplication (* 2): " + (number * 2) + "</p>";
result += "<p>Division (/ 4): " + (number / 4) + "</p>";

// Display the result in the browser
document.write(result);

// Q2

// var a = 2, b = 1;: This line initializes two variables a and b with values 2 and 1, respectively.

// --a;: Pre-decrement operator --a decrements the value of a by 1 before returning its value. So, after this operation, a becomes 1.

// --a - --b;: Pre-decrement operators are applied to both a and b. --a decrements the value of a to 0, and --b decrements the value of b to 0. Then, the subtraction operation is performed, resulting in 0 - 0, which equals 0.

// --a - --b + ++b;: Here, a pre-increment ++b is applied to b. So, b becomes 1. Then, the expression --a - --b from the previous step is added to ++b, resulting in 0 - 0 + 1, which equals 1.

// --a - --b + ++b + b--;: The post-decrement b-- decrements the value of b after using its current value in the expression. So, b is used as 1, and then decremented to 0. The expression --a - --b + ++b from the previous step is added to b--, resulting in 0 - 0 + 1 + 1, which equals 2.

// So, after the execution of the script:

// document.write(
// a will be 0.
// b will be 0.
// result will be 2.

// )


// Q3



// Get the name from the user
var userName = prompt("Enter your name:");

// Check if the user entered a name
if (userName) {
    // Display the greeting
    alert("Hello, " + userName + "! Welcome to the Greeting Program!");
} else {
    // Display a message if the user didn't enter a name
    alert("Hello there! Welcome to the Greeting Program!");
}


// Q5

// Function to generate multiplication table
function generateMultiplicationTable() {
    // Prompt the user to enter a number
    var num = prompt("Enter a number to generate its multiplication table (or leave it blank to generate the table for 5):");
}

// If the user didn't enter a new number, set it to 5 by default
if (num === "") {
    num = 5;
}

// Generate the multiplication table for the given number
var table = "";
for (var i = 1; i <= 10; i++) {
    table += num + " x " + i + " = " + num * i + "<br>";
}

// Q9

function calculateMarks() {
    // Get subjects' names from the user and store them in variables
    var subject1 = document.getElementById("subject1Input").value;
    var subject2 = document.getElementById("subject2Input").value;
    var subject3 = document.getElementById("subject3Input").value;

    // Total marks for each subject
    var totalMarks = 100;

    // Take obtained marks for the first subject from the user
    var obtainedMarksSubject1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

    // Take obtained marks for the remaining 2 subjects from the user
    var obtainedMarksSubject2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
    var obtainedMarksSubject3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

    // Calculate total marks and percentage
    var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
    var totalPercentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

    // Display the result in a table
    var table = document.getElementById("resultTable");
    var row1 = table.insertRow();
    var cell1 = row1.insertCell(0);
    var cell2 = row1.insertCell(1);
    var cell3 = row1.insertCell(2);
    cell1.innerHTML = subject1;
    cell2.innerHTML = totalMarks;
    cell3.innerHTML = obtainedMarksSubject1;

    var row2 = table.insertRow();
    var cell4 = row2.insertCell(0);
    var cell5 = row2.insertCell(1);
    var cell6 = row2.insertCell(2);
    cell4.innerHTML = subject2;
    cell5.innerHTML = totalMarks;
    cell6.innerHTML = obtainedMarksSubject2;

    var row3 = table.insertRow();
    var cell7 = row3.insertCell(0);
    var cell8 = row3.insertCell(1);
    var cell9 = row3.insertCell(2);
    cell7.innerHTML = subject3;
    cell8.innerHTML = totalMarks;
    cell9.innerHTML = obtainedMarksSubject3;

    var row4 = table.insertRow();
    var cell10 = row4.insertCell(0);
    var cell11 = row4.insertCell(1);
    var cell12 = row4.insertCell(2);
    cell10.innerHTML = "Total";
    cell11.innerHTML = totalMarks * 3;
    cell12.innerHTML = totalObtainedMarks;

    var row5 = table.insertRow();
    var cell13 = row5.insertCell(0);
    var cell14 = row5.insertCell(1);
    var cell15 = row5.insertCell(2);
    cell13.innerHTML = "Percentage";
    cell14.innerHTML = "";
    cell15.innerHTML = totalPercentage.toFixed(2) + "%";
}