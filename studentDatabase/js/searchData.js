var search,
    student,
    message = '';

//Print function 
function print(message, id) {
    var outputDiv = document.getElementById(id);
    outputDiv.innerHTML = message;
}
//compile selected student data for display
function getStudentReport(student) {
    var report = '<h2> Student: ' + student.name + '</h2>';
    report += '<p> Track: ' + student.track + '</p>';
    report += '<p> Points: ' + student.points + '</p>';
    report += '<p> Achievments: ' + student.achievements + '</p>';
    return report;
}
/*
A while loop that asks for student name or 'quit' to end program
if a name is enterted program loops thru array of objects 
and searchs through the student[i].name for a match
if a match occurs calls on getStudentReport(student) 
function to print out data
*/
while (true) {
    search = prompt('Type in the name of the student to search, to quit type \'quit\' ');
    if (search === null || search.toLowerCase() === 'quit') {
        print('Thank you for searching our student database', 'main');
        break;
    }//if statment that checks if user either quit or did not enter data
    message = '';
    var i,
        notfound = true;
    for (i = 0; i < students.length; i += 1) {
        student = students[i];
        if (student.name.toLowerCase() === search.toLowerCase()) {
            message += getStudentReport(student);
            notfound = false;
        }
    }//Loop to search for student data and compile report
    if (notfound) {
        message = 'Sorry  ' + search + ' is not a student here';
    }
    print(message, 'main');
} //end of while loop