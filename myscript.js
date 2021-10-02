// Creating object using literal syntax
const student1 = { 
    name: "Aaditya Moykhede", 
    className: "D15", 
    rollNo: 48,
    marks: 82,
};


// Creating object using constructor function
class Student {
    constructor(uname, className, rollNo, marks) 
    { 
        this.uname = uname;
        this.className = className; 
        this.rollNo = rollNo;
        this.marks = marks;
    }

}

    const student2 = new Student("Aaadi", "D15A", 48, 88); 
    console.log("Student 2: ", student2);


// Use of Prototype 
    Student.prototype.college = "VESIT"; 
    console.log("Student 2: ", student2);

    name1=student2.uname
    classname1=student2.className
    roll=student2.rollNo
    mark1=student2.marks

    document.getElementById("showRoll").innerHTML = roll;
    document.getElementById("showName").innerHTML = name1;
    document.getElementById("showClass").innerHTML =classname1; 
    document.getElementById("showMarks").innerHTML = mark1;



// Generating an Exception
function checkError() {
    const value = document.getElementById("checkError").value; 
    console.log(value);

    if (isNaN(value) || value == 0) { 
        throw new Error("Invalid Input");
    }
    else {
        console.log("Valid Input");
    }
}