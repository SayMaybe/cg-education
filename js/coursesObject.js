console.log("I am linked.");

var course = {
name: "Junk Shopping",
department: "International Studies",
teacher: "The Colonel",
semester: "Fall 2017",
validDept: function(deptSearched) {
  if (deptSearched == this.department) {
    return true;
  } else {
    return false;
    }
  }
}

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
