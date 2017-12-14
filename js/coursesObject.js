var course = {
name: "Junk Shopping",
department: "International Studies",
teacher: "The Colonel",
semester: "Fall 2017",
validDept = function(deptSearched) {
  if (deptSearched == "International Studies" || deptSearched == "Music" || deptSearched == "Mathematics" || deptSearched == "Meteorology" || deptSearched == "Women's Studies") {
    return true;
  }
    return false;
  }
}
var deptSearched = false;
while (!validDept(deptSearched)){
  deptSearched = prompt("Please enter a department in which to search for a class.")
    if (!validDept(deptSearched)){
      alert("Your choice does not have any classes.");
    }
    else {
        for (var i = 0; i < course.length; i++){
          if (course.department == deptSearched){

    }
  }
      alert("The classes are " + course.department + ".")
}
