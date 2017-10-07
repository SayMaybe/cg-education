console.log('This is a file.');
var teacherName = 'Betsy Miller';
var teacherDepartment = 'Physics';
console.log(teacherName);
console.log(teacherDepartment);
var teacherRatings = [[1.25, 5.0], [5.0, 3.2], [4.5, 1.9];
console.log(teacherRatings);
function getRatingAvg(teacherRatings) {
  var totalRatings = 0;
  for (var i = 0; i < teacherRatings.length; i++) {
      totalRatings = totalRatings + teacherRatings[i];
  }
  return Math.round((totalRatings / teacherRatings.length) * 10) / 10;
}
console.log(getRatingAvg (teacherRatings));
console.log(teacherRatings);
var rating = 0;
function valid(rating) {
  if (rating >= 1.0 && rating <= 5.0){
    return true;
  }
  return false;
}
function addTeacherRating(teacherRatings, rating) {
    teacherRatings.push(rating);
    return teacherRatings;
}
prompt("Please rate ")
while (!valid(rating)){
  rating = prompt("Please give a rating between 1.0 and 5.0");
  console.log("rating " + rating);
  console.log(teacherRatings);
  teacherRatings = addTeacherRating(teacherRatings, rating);
  console.log("teacherRatings " + teacherRatings);

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
