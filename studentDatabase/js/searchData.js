var search,
    student,
    message = '',
    notfound = true,
    i;

//Print function 
function print(message, id) {
    var outputDiv = document.getElementById(id);
    outputDiv.innerHTML = message;
}

function getStudentReport(student) {
    var report = '<h2> Student: ' + student.name + '</h2>';
    report += '<p> Track: ' + student.track + '</p>';
    report += '<p> Points: ' + student.points + '</p>';
    report += '<p> Achievments: ' + student.achievements + '</p>';
    return report;
}

while (true) {
    search = prompt('Type in the name of the student to search, to quit type \'quit\' ');
    if (search === null || search.toLowerCase() === 'quit') {
        print('Thank you for searching our student database', 'main');
        break;
    }
    message = '';
    for (i = 0; i < students.length; i += 1) {
        student = students[i];
        if (student.name.toLowerCase() === search.toLowerCase()) {
            message += getStudentReport(student);
            notfound = false;
        }
    }
    if (notfound) {
        message = 'Sorry  ' + search + ' is not a student here';
    }
    print(message, 'main');
} //end of while loop