function Teacher (name, department, ratings) {
  this.name = name;
  this.department = department;
  this.ratings = ratings;
}

Teacher.prototype.addRating = function (newRating){
  this.ratings.push(newRating);
};

Teacher.prototype.getRatingAvg = function() {
  var totalRatings = 0;
  for (var i = 0; i < this.ratings.length; i++) {
    totalRatings = totalRatings + this.ratings[i];
  }
  return Math.round((totalRatings / this.ratings.length) * 10) / 10;
};

Teacher.prototype.validRating = function(newRating) {
  if (newRating >= 1.0 && newRating <= 5.0){
    this.addRating(newRating);

  }
  return false;
};
var teacherSally = new Teacher("Sally", "Physics", [5.0, 4.3, 4.1]);
console.log("Name: " + teacherSally.name + "\nDept: " + teacherSally.department + "\nRatings: " + teacherSally.ratings);
var teacherBen = new Teacher("Ben", "Astronomy", [3.2, 3.6, 4.5]);
console.log("Name: " + teacherBen.name + "\nDept: " + teacherBen.department + "\nRatings: " + teacherBen.ratings);
var teacherJoe = new Teacher("Joe", "Surfing", [2.3, 4.8, 3.9]);
console.log("Name: " + teacherJoe.name + "\nDept: " + teacherJoe.department + "\nRatings: " + teacherJoe.ratings);

teacherSally.addRating(3.2)
console.log(teacherSally.ratings);
