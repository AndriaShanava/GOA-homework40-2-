// 1)
let student = {
    name: "Nika",
    surname: "Beridze",
    age: 17,
    grade: 10,
    get fullName(){
        return(this.name, this.surname)
    },
    get studentInfo(){
        return (`${this.name} ${this.surname} is ${this.age} years old studies in grade ${this.grade}`)
    }
};

student.fullName
student.studentInfo

// მოთხოვნები:
// შექმენი fullName Getter, რომელიც დააბრუნებს სტუდენტის სრულ სახელსა და გვარს.
// შექმენი studentInfo Getter, რომელიც დააბრუნებს სტუდენტის შესახებ სრულ ინფორმაციას შემდეგი ფორმატით:
// "Nika Beridze is 17 years old and studies in grade 10."
// studentInfo Getter-ში სრული სახელის მისაღებად გამოიყენე fullName Getter.
// ორივე Getter უნდა გამოიძახებოდეს თვისებასავით, ფრჩხილების გარეშე.