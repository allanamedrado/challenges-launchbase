const classA = [
    {
        name: "Allana",
        grade: 5
    },
    {
        name: "Letícia",
        grade: 8
    },
    {
        name: "Allan",
        grade: 0
    },
    {
        name: "João",
        grade: 6
    }
]

const classB = [
    {
        name: "Allana",
        grade: 5
    },
    {
        name: "Letícia",
        grade: 7
    },
    {
        name: "Allan",
        grade: 5
    }
]


function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade

    }
    return average = sum / students.length

}

function sendMessage(average, class) {
    if (average > 5) {
        console.log(` ${class} average ${average}. Congratulations!`)
    } else {
        console.log(` ${class} average ${average}. Is not good!`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendMessageFlunked(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is reproved`)
    }
}

function studentsReprovado(students) {
    for (const student of students) {
        markAsFlunked(student)
        sendMessageFlunked(student)
    }
}

const media1 = calculateAverage(classA)
const media2 = calculateAverage(classB)

sendMessage(average1, 'class A')
sendMessage(average2, 'class B')

studentsReprovado(classA)
studentsReprovado(classB)