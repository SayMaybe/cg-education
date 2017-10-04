console.log("This is a file.");
var teacherName = 'Betsy Miller';
var teacherDepartment = 'Physics';
console.log(teacherName);
console.log(teacherDepartment);
var ratingOne = 1.25;
var ratingTwo = 5.0;
var ratingThree = 3.6;
/*var avgRating = (ratingOne + ratingTwo + ratingThree) / 3;
avgRating = Math.round(avgRating * 10) / 10;*/
var teacherRatings = [1.25, 5.0, 5.5];
console.log(teacherRatings);
function getRatingAvg(teacherRatings) {
  var totalRatings = 0;
  for (var i = 0; i < teacherRatings.length; i++) {
      totalRatings = totalRatings + teacherRatings[i];
  }
  return Math.round((totalRatings / teacherRatings.length) * 10) / 10;
}
console.log(getRatingAvg (teacherRatings));
var rating = 0;
function valid(rating) {
  if (rating >= 1.0 && rating <= 5.0){
    return true;
  }
  return false;
}
prompt("Please give a rating between 1.0 and 5.0");
while (!valid(rating)){
  rating = prompt("Please give a rating between 1.0 and 5.0");
  teacherRatings = function addTeacherRating(teacherRatings[], rating);
  console.log("Good job!");

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
