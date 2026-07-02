let students = [];
console.log("Welcome to Student Management System!");
console.log("----------------------------------------");

while(true){
let feature = Number(prompt(`Enter
  1.Add Student
  2.View Student
  3.Search Student
  4.Update Student
  5.Delete Student
  6.Show Topper
  7.Exit`));

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
    break;
  default :
    console.log("Please Enter the option from the given list only");
}

if(feature === 7){
  break;
}
}

const addStudent = () => {
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

const viewAllStudent = () => {
if(students.length === 0){
  console.log("No Students available!");
  return;
}
for(let i = 0; i<students.length; i++){
  const {name, age, cgpa} = students[i];
  console.log(`
    Student ${i+1}
    -------------------------------
    Name : ${name}
    Age : ${age}
    Cgpa : ${cgpa};
    -------------------------------
    `)
}
}

const searchStudent = () => {
  let whichStudent = prompt("Enter the student name you want details about:");
  let found = false;
  for(let i=0; i<students.length; i++){
    if((whichStudent).toLowerCase() === (students[i].name).toLowerCase()){
      const {name, age, cgpa} = students[i];
      console.log(`
      Name : ${name}
      Age : ${age}
      Cgpa : ${cgpa}`);


      found = true;
      break;
    }
    
  }
  if(!found){
    console.log("Student Not Found");
    return;
  }
}


const updateStudent = () => {
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

const deleteStudent = () => {
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

const showTopper = () => {
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
  const {name, age, cgpa} = topper;
  console.log(`
  The topper is:
  Name : ${name}
  Age : ${age}
  Cgpa : ${cgpa} `);

}
