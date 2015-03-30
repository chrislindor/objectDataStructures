var student = [
    {
        name: 'Christopher Lindor',
        track: 'JavaScript',
        achievements: 100,
        points: 1500
    },
    {
        name: 'Nathaniel Quashie',
        track: 'Ruby',
        achievements: 99,
        points: 1800
    },
    {
        name: 'Gerardo Martienz',
        track: 'HTML',
        achievements: 30,
        points: 1000
    },
    {
        name: 'Walter Walker',
        track: 'Java',
        achievements: 2,
        points: 100
    },
    {
        name: 'Devon Carr',
        track: 'C++',
        achievements: 0,
        points: 25
    }
];


var finalMessage = '';
var x;
for (x = 0; x < student.length; x += 1) {
    finalMessage += '<h3>Student: ' + student[x].name + '</h3>';
    finalMessage += '<p> Track: ' + student[x].track + '</p>';
    finalMessage += '<p> Points: ' + student[x].points + '</p>';
    finalMessage += '<p> Achievments: ' + student[x].achievements + '</p>';
}

function print(message, id) {
    var outputDiv = document.getElementById(id);
    outputDiv.innerHTML = message;
}
print(finalMessage, "main");