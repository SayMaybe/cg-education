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
