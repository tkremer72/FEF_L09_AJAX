# Lesson 09 AJAX
Lesson 9 Hands-On45 points
Directions
In this Hands-On exercise, you will be practicing your new AJAX skills. This Hands-On will be graded, so be sure you complete all requirements.

Caution!
Do not submit your project until you have completed all requirements, as you will not be able to resubmit.

Setup
Open up your terminal/command prompt.

Navigate to your desktop in your terminal.

cd Desktop
Next, navigate to the FullStackWeb directory in your terminal.

cd FullStackWeb
Then, navigate to the FrontEndFoundations directory in your terminal.

cd FrontEndFoundations
Create a new project folder named L09HandsOn located within the FrontEndFoundations folder in your terminal.

mkdir L09HandsOn
Once the process is complete, navigate into the L09HandsOn directory:

cd L09HandsOn
Run the following to open your new project in VS Code (or you can open the folder within VS Code directly):

code .
Create three new files: index.html, script.js, and einstein.json in VSCode by selecting the add file button shown below:

newFile

Link your JavaScript file to your HTML file using <script src="script.js"></script>

Requirements
For this project, you are going to use AJAX to create a web page that displays a famous historical figure, Einstein, and his information. Follow the below requirements. All JavaScript code should live within the script.js file.

Step 1
Within the einstein.json file, create a json object that includes the following keys:
name with Einsteins full name
birthday with Einsteins birth date
bio that includes his full bio
Create a function that will show the name and birthday of Einstein when the page is loaded using the einstein.json file.
Create a button that will call another function and will display his full bio when clicked.
Use the DOM to display the bio
Don't forget the necessary HTML code to allow this all to work!
You have to run http-server to correctly see this working or you will get an error.