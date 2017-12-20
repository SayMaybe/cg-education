var teacher = {
  name: "The Colonel", department: "International Studies",
  ratings: [3.0, 2.5, 1.9],
  avgRating: 0.0,
  addRating: function(newRating) {
    this.ratings.push(newRating);
    this.calculateRatingAvg();
    alert("Thank you, " + this.name + " has an average rating of " + this.avgRating + ".");
    },
  calculateRatingAvg: function() {
    var totalRatings = 0;
    for (var i = 0; i < this.ratings.length; i++) {
      totalRatings = totalRatings + this.ratings[i];
    }
    this.avgRating = Math.round((totalRatings / this.ratings.length) * 10) / 10;
  },

  validRating: function(newRating) {
    if (newRating >= 1.0 && newRating <= 5.0){

      return true;
    }
    return false;
  }
};
console.log(teacher.ratings);

var shouldIRateATeacher = true;

while (shouldIRateATeacher){
    var newRating = 0;
     while (!teacher.validRating(newRating)){
     newRating = prompt("Please give " + teacher.name + " a rating between 1.0 and 5.0");
     newRating = newRating * 1.0;
     if (!teacher.validRating(newRating)){
       alert("I said a number between 1.0 and 5.0! Press enter to try again.");
     };
   };
teacher.addRating(newRating);
shouldIRateATeacher = false;
 };
console.log(teacher.ratings);

var course = {
name: "Junk Shopping",
department: "International Studies",
teacher: teacher,
semester: "Fall 2017",
validDept: function(deptSearched) {
  if (deptSearched == this.department) {
    return true;
  } else {
    return false;
    }
  }
}
console.log(course.teacher.name);

var deptSearched = "";

if (!course.validDept(deptSearched)){
  deptSearched = prompt("Please enter a department to search for a class.")
    if (!course.validDept(deptSearched)){
      alert("Your choice does not have any classes.");
    }
    else {
            alert("The classes are " + course.department + ".");
          }
      }
