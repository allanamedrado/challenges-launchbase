person = {
    name: "Carlos",
    weight: 84,
    height: 1.88
};


function calculateIMC(person){
    const imc = person.weight / (person.height*person.height);

    if (imc >= 30) {
        console.log(`${person.name}, you're above of the weight`)
    } else {
        console.log(`${person.name}, you're not above of the weight`)
    }
}

calculateIMC(person);
