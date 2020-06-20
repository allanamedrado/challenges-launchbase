const users = [
    {
        name: "Carlos",
        technologies: [
            "HTML", "CSS"
        ]
    },
    {
        name: "Jasmine",
        technologies: [
            "Javascript", "CSS"
        ]
    },
    {
        name: "Tuane",
        technologies: [
            "HTML", "Nodejs"
        ]
    }
];

function print(users){
    for (let i = 0; i< users.length; i++) {
      console.log(`${users[i].name} works with ${users[i].technologies}`)
       
    }
}

print(users);