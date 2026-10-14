let student = {
    name: "Goga",
    address: {
        city: "Tbilisi",
        details: {
            street: "Rustaveli"
        }
    },
    grades: [90, 85],
    courses: [
        {
            name: "JavaScript",
            teacher: {
                name: "Nika"
            },
            topics: ["Objects", "Arrays"]
        }
    ]
};
console.log(student.address.city);
console.log(student.address.details.street);
console.log(student.grades[1]);
console.log(student.courses[0].name);
console.log(student.courses[0].teacher.name);
console.log(student.courses[0].topics[1]);
console.log(student.name);