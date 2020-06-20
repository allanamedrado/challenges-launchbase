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

function checkIfUserWorkCSS(users){
    for (const technology of users.technologies) {
        if(technology === "CSS"){
            return true
        } 
    }
}

for (let i = 0; i < users.length; i++) {
    const userWorkWithCSS = checkIfUserWorkCSS(users[i]); //pegando os dados da função
  
    if (userWorkWithCSS) {
      console.log(`The user ${users[i].name} works with CSS`);
    }
  }



