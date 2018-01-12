function Course (name, department, teacher, semester) {
  this.name = name;
  this.department = department;
  this.teacher = teacher;
  this.semester = semester;
}

Course.prototype.validDept = function(deptSearched) {
  if (deptSearched.toLowerCase() === this.department.toLowerCase()) {
    return true;
  } else {
    return false;
    }
  }

var deptSearched = "";

if (!Course.prototype.validDept(deptSearched)){
  deptSearched = prompt("Please enter a department to search for a class.")
    if (!Course.prototype.validDept(deptSearched)){
      alert("Your choice does not have any classes.");
    }
    else {
            alert("The classes are " + Course.protype.name + ".");
