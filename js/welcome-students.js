var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth();

/************************/
/* THESE TAKE ONE PARAMETER EACH - STUDENT'S CLASS -
/* WHICH SHOULD BE OBTAINED (RETURNED?) FROM
/* THE gradDate FUNCTION
/*************************/

var welcomeCollegeStudent = function() {
  alert("Welcome " + classYear + "!");
};

var welcomeHsStudent = function() {
  alert("You're still a " + classYear + " in high school.");
};

function gradDate(month, year) {
  return month + ", " + year;
}

/***********************/
/* THIS ACCEPTS TWO PARAMETERS VIA
/* PROMPTS FOR THE USER, THEN CALLS THE
/* WELCOME FUNCTION AND PASSES THE
/* CORRECT GRAD CLASS AS A PARAMETER
/***********************/

function welcomeStudentsByGraduatingClass(gradDate, collegeWelcome, hSWelcome) {
    var yearEntered = prompt("Enter your graduation year:");
    var monthEntered = prompt ("Enter the month you will graduate:");
    var diff = yearEntered - currentYear;
    /***** METHOD FOR FIGURING CURRENT YEAR */

    /****** COLLEGE STUDENT */
    if (diff <= 4 && diff >= 0) {
        if (yearEntered == currentYear) {
            classYear = "Senior";
        } else if (yearEntered == currentYear + 1) {
            classYear = "Junior";
        } else if (yearEntered == currentYear + 2) {
            classYear = "Sophomore";
        } else if (yearEntered == currentYear + 3) {
            classYear = "Freshman";
        }
        collegeWelcome(classYear);

        /******** HS STUDENT */
    } else if (diff > 4) {
        var yearPlus4 = currentYear + 4;
        if (yearEntered == yearPlus4 && monthEntered == "December") {
            classYear = "Senior";
        } else if (yearEntered - yearPlus4 == 1 && monthEntered == "May") {
            classYear = "Senior";
        } else if (yearEntered - yearPlus4 == 2 && monthEntered == "December") {
            classYear = "Junior";
        } else if (yearEntered - yearPlus4 == 2 && monthEntered == "May") {
            classYear = "Junior";
        } else if (yearEntered - yearPlus4 == 3 && monthEntered == "December") {
            classYear = "Sophomore";
        } else if (yearEntered - yearPlus4 == 3 && monthEntered == "May") {
            classYear = "Sophomore";
        } else if (yearEntered - yearPlus4 == 4 && monthEntered == "December") {
            classYear = "Freshman";
        } else if (yearEntered - yearPlus4 == 4 && monthEntered == "December") {
            classYear = "Freshman";
        }
        hSWelcome(classYear)
    }


}
welcomeStudentsByGraduatingClass(gradDate, welcomeCollegeStudent, welcomeHsStudent);