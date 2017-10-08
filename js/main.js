function getRatingAvg(teacherRatings) {
  var totalRatings = 0;
  for (var i = 0; i < teacherRatings.length; i++) {
      totalRatings = totalRatings + teacherRatings[i];
  }
  return Math.round((totalRatings / teacherRatings.length) * 10) / 10;
}

function addTeacherRating(teacherRatings, rating) {
    teacherRatings.push(rating);
    return teacherRatings;
}

function valid(rating) {
  if (rating >= 1.0 && rating <= 5.0){
    return true;
  }
  return false;
}

var teacherNames = ['Betsy', 'Bob', 'Janet'];
var teacherDepartments = ['Physics', 'Math', 'Programming'];
var teachersRatings = [[1.25, 5.0], [5.0, 3.0], [4.5, 1.9]];
console.log(getRatingAvg (teachersRatings[1]));
console.log(teachersRatings);
var rating = 0;
var shouldIRateATeacher = true;

while (shouldIRateATeacher){
  index = prompt("Which teacher would you like to rate? Choose a number: \n"
   + " 0. Betsy 1. Bob 2. Janet")
   while (!valid(rating)){
     rating = prompt("Please give " + teacherNames[index] + " a rating between 1.0 and 5.0");
   }
     teachersRatings[index] = addTeacherRating(teachersRatings[index], rating);
     console.log("teacherRatings " + teachersRatings[index]);

     console.log("Good job!");



 shouldIRateATeacher = false;
}



/*console.log(studentName);
var major = 'Astrology';
var email = 'jos.camel@esp.com';
var gpa = '3.2';
var course = 'Goat Tending';
var semester = "Fall 2017";
console.log("Major: " + major);
console.log("email: " + email)
console.log("GPA: " + gpa)
console.log("Course: " + course)
console.log("Semester: " + semester)*/
