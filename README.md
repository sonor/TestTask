# TestTask

Nodejs version 8.15.1 compatible

-All JavaScript tests is located in the '/tests' folder and includes 15 test cases

# Installation
-To install all dependencies use command: 'npm install' from the package root directory
-If you use windows machine, you have to place your html file to 'C:\'
-In order to use your own file location you can edit address variable in the 'wdio.conf.js' file

# Run
-To run tests use command: 'npm test' from the package root directory

# Additional notes
-Package consist 'full-sbs-test.js' file which run Full Step by Step test in one browser window and show detailed log messages
In order to run this file use command: 'npm test -- --spec=full-sbs-test.js'
-Default browser is Chrome but you may change the browser in the 'wdio.conf.js' file

