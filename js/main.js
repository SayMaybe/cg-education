console.log("This is a file.");
var firstName = 'Betsy';
var lastName = 'Jones';
var teacherName = firstName + " " + lastName;
console.log(teacherName);
/*var teacherList = [{firstName: 'Betsy', lastName: 'Jones', department: 'Physics'},
                    {firstName: 'John', lastName: 'Fleming', department: 'Astronomy'}];
/*var teacher = {};
teacher.firstName = 'Betsy';
teacher.lastName = 'Jones';
teacher.department = 'Physics';
teacherList.push(teacher);
teacher = {};
teacher.firstName = 'John';
teacher.lastName = 'Fleming';
teacher.department = 'Astronomy';
teacherList.push(teacher);
console.log(teacherList);*/
var department = 'Physics';
var ratingOne = 1.25;
var ratingTwo = 5.0;
var ratingThree = 3.6;
var avgRating = (ratingOne + ratingTwo + ratingThree) / 3;
console.log("Teacher: " + teacherName);
console.log("Department: " + department);
console.log("Ratings: " + ratingOne + ratingTwo + ratingThree);
console.log("Average Rating: " + Math.round(avgRating * 100) / 100);
