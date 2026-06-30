let students = [];
console.log("Welcome to Student Management System!");
console.log("----------------------------------------");

while(true){
let feature = Number(prompt("Enter\n1.Add Student\n2.View Student\n3.Search Student\n4.Update Student\n5.Delete Student\n6.Show Topper\n7.Exit"));

switch(feature){
  case 1 : 
    addStudent();
    break;
  case 2 :
    viewAllStudent();
    break;
  case 3 :
    searchStudent();
    break;
  case 4 :
    updateStudent();
    break;
  case 5 :
    deleteStudent();
    break;
  case 6 :
    showTopper();
    break;
  case 7 :
    console.log("Thank you for using Student Management System!");
  default :
    console.log("Please Enter the option from the given list only");
}

if(feature === 7){
  break;
}
}

function addStudent(){
let ans = "yes";
while(ans === "yes"){
let student = {
    name : prompt("Enter name:"),
    age : Number(prompt("Enter age:")),
    cgpa : Number(prompt("Enter cgpa:"))
};
students.push(student);
console.log("Student added successfully");
ans = (prompt("Do you want to add data of another student?")).toLowerCase();
}
}

function viewAllStudent(){
if(students.length === 0){
  console.log("No Students available!");
}
for(let i = 0; i<students.length; i++){
  console.log("Student"+ (i+1));
  console.log("------------------------");
  console.log("Name: "+students[i].name);
  console.log("Age: "+students[i].age);
  console.log("Cgpa: "+students[i].cgpa);
  console.log("------------------------");
}
}


function searchStudent(){
  let whichStudent = prompt("Enter the student name you want details about:");
  let found = false;
  for(let i=0; i<students.length; i++){
    if((whichStudent).toLowerCase() === (students[i].name).toLowerCase()){
      console.log("Name: "+students[i].name);
      console.log("Age: "+students[i].age);
      console.log("Cgpa: "+students[i].cgpa);
      found = true;
      break;
    }
    
  }
  if(!found){
    console.log("Student Not Found");
    return;
  }
}


function updateStudent(){
let whichStudent = prompt("Enter the student name you want update:");
  let found = false;
  for(let i=0; i<students.length; i++){
    if((whichStudent).toLowerCase() === (students[i].name).toLowerCase()){
      let ans = "yes";
      while(ans === "yes"){
        let which = (prompt("What you want to modify(name,age or cgpa):")).toLowerCase();
      switch(which){
        case "name" :
          let newName = prompt("Enter new name:");
          students[i].name = newName;
          break;
        case  "age" :
          let newAge = Number(prompt("Enter new age:"));
          students[i].age = newAge;
          break;
        case "cgpa" :
          let newCgpa = Number(prompt("Enter new cgpa:"));
          students[i].cgpa = newCgpa;
          break;
        default :
          console.log("Invalid field. Please choose name, age, or cgpa.");
      }
      console.log("Student updated successfully!");
      ans = (prompt("Do you want modify something else?")).toLowerCase();
      }
      found = true;
    }
  }
  if(!found){
    console.log("Student Not Found");
    return;
  }
}

function deleteStudent(){
  let whichStudent = prompt("Enter the student name you want to remove:");
  let found = false;
  for(let i=0; i<students.length; i++){
    if((whichStudent).toLowerCase() === (students[i].name).toLowerCase()){
      students.splice(i, 1);
      console.log("Student deleted successfully!");

       
      found = true;
      break;
    }
  }
  if(!found){
    console.log("Student Not Found");
    return;
  }

}

function showTopper(){
  if (students.length === 0) {
    console.log("No students available.");
    return;
}
  let topper = students[0];
  for(let i=0; i<students.length; i++){
    if(topper.cgpa < students[i].cgpa){
      topper = students[i];
    }
    
  }
  console.log("The topper is:");
  console.log("Name: "+topper.name);
  console.log("Age: "+topper.age);
  console.log("Cgpa: "+topper.cgpa);

}
