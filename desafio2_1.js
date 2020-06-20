const developers = {
    name: "Allana",
    age: "22",
    technologies: [
        {
            name: "CSS",
            specialty: "Web"
        },
        {
            name: "Javascript",
            specialty: "Web"
        }
    ]
}

console.log(`The developer ${developers.name} have ${developers.age} age and works with ${developers.technologies[0].name} 
with specialty in ${developers.technologies[0].specialty}`)