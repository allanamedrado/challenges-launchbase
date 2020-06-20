const person = [
   { 
        name: "Silvana",
        gender: "F",
        age: 48,
        contribution: 23
   },

   {
       name: "João",
       gender: "M",
       age: 85,
       contribution: 21
   }
   
];

function calculateRetirement(person){
    const calculateFEM = person[0].age + person[0].contribution;
    const calculateMALE = person[1].age + person[1].contribution;

    if (person[0].gender === "F" && person[0].age >= 30){
        if(calculateFEM >= 85){
      console.log(`${person[0].name}, you can retire`)
    }
    } else if (person[1].gender === "M" && person[1].age >= 35){
        if(calculateMALE >= 95){
            console.log(`${person[1].name}, you can retire`)
        }
     } else {
        console.log(`${person[0].name}, you can't retire`)
    }  {
        console.log(`${person[1].name}, you can't retire`)
    }
}

calculateRetirement(person);