var student,
    message = '',
    x;// x is the variable to be used in the loop
//Print function 
function print(message, id) {
    var outputDiv = document.getElementById(id);
    outputDiv.innerHTML = message;
}
//loop to print object to page
for (x = 0; x < students.length; x += 1) {
    student = students[x];
    message += '<h2>Student: ' + student.name + '</h2>';
    message += '<p> Track: ' + student.track + '</p>';
    message += '<p> Points: ' + student.points + '</p>';
    message += '<p> Achievments: ' + student.achievements + '</p>';
}
print(message, 'main');