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
/*console.log(getRatingAvg (teachersRatings[1]));*/
console.log(teachersRatings);
var shouldIRateATeacher = true;

while (shouldIRateATeacher){
  var rating = 0;
  index = prompt("Which teacher would you like to rate? Choose a number: \n"
   + " 0. Betsy 1. Bob 2. Janet")
   while (!valid(rating)){
     rating = prompt("Please give " + teacherNames[index] + " a rating between 1.0 and 5.0");
     rating = rating * 1.0;
     if (!valid(rating)){
       alert("No stupid, I said a number between 1.0 and 5.0! Press enter to try again.");
     }
   }
     teachersRatings[index] = addTeacherRating(teachersRatings[index], rating);
     var avgTeacherRating = getRatingAvg(teachersRatings[index]);
     console.log("You gave " + teacherNames[index] + " a rating of " + rating + ".");
     console.log("Thank you!" + teacherNames[index] + " now has an average rating of " + avgTeacherRating);
     prompt("Would you like to rate another teacher?")



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
