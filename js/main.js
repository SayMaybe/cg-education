/*function getRatingAvg(teacherRatings) {
  var totalRatings = 0;
  for (var i = 0; i < teacherRatings.length; i++) {
      totalRatings = totalRatings + teacherRatings[i];
  }
  return Math.round((totalRatings / teacherRatings.length) * 10) / 10;
}*/

/*function valid(rating) {
  if (rating >= 1.0 && rating <= 5.0){
    return true;
  }
  return false;
}*/
/*console.log(getRatingAvg (teachersRatings[1]));
console.log(teachersRatings);
var shouldIRateATeacher = true;

while (shouldIRateATeacher){
  var rating = 0;
  index = getValidTeacherIndex(teacherNames);
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
     console.log("Thank you! " + teacherNames[index] + " now has an average rating of " + avgTeacherRating);
     console.log(teachersRatings);
     /*shouldIRateATeacher = confirm("Would you like to rate another teacher?")*/
function validDept(deptSearched) {
if (deptSearched == 'Math' || deptSearched == 'Science' || deptSearched == 'Art' || deptSearched == 'English') {
  return true;
}
  return false;
}


var coursesArray = [['Easy Math', 'Math'], ['Hard Math', 'Math'], ['Nearly Impossibly Math', 'Math'], ['Math for Dummies', 'Math'],
                      ['Anthropology', 'Science'], ['Biology', 'Science'],
                      ['Drawing 101', 'Art'], ['Sculpture', 'Art'], ['The Art of Not Giving a F**k', 'Art']];

var teacherNames = ['Betsy', 'Bob', 'Janet'];
var teacherDepartments = ['Physics', 'Math', 'Programming'];
var teachersRatings = [[1.25, 5.0], [5.0, 3.0], [4.5, 1.9]];


}
var deptSearched = false;
while (!validDept(deptSearched)){
  deptSearched = prompt("Please enter a department in which to search for a class.")
    if (!validDept(deptSearched)){
      alert("Your choice does not have any classes.");
    }
    else {
        var newArray = [];
        for (var i = 0; i < coursesArray.length; i++){
          if (coursesArray[i][1] == deptSearched){
            newArray.push(coursesArray[i][0]);
    }
  }
      alert("The classes are " + newArray + ".")
}
  console.log(newArray);
}

/*function addTeacherRating(teacherRatings, rating) {
    teacherRatings.push(rating);
   return teacherRatings;
 }*/
 /*function getValidTeacherIndex(listOfTeachers) {
   var index = -1;
   var stringOfTeachers = "";
   for (ii = 0; ii < listOfTeachers.length; ii++) {
     stringOfTeachers = stringOfTeachers + ii + ": " + listOfTeachers[ii];
     if (ii < listOfTeachers.length - 1) {
       stringOfTeachers = stringOfTeachers + ", ";
     }
   }
   while (index < 0 || index > listOfTeachers.length - 1) {
     index = prompt("Which teacher would you like to rate? Choose a number: \n" + stringOfTeachers);
   }
   return index;
 }*/
