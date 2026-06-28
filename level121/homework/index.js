// 1)შექმენი ფუნქცია analyzeTemperature(temp) რომელიც:
// თუ ტემპერატურა 30-ზე მეტია, დააბრუნებს "Hot".
// თუ 15-30 შუალედშია, დააბრუნებს "Normal".
// თუ 15-ზე ნაკლებია, დააბრუნებს "Cold".
function analyzeTemperature(temp) {
    return temp > 30 ? "Hot" : temp >= 15 && temp < 30 ? "Normal" : "Cold";
}

// 2)შექმენი ფუნქცია:
// calculateSalary(hoursWorked, hourlyRate = 20)
// რომელიც დააბრუნებს მთლიან ხელფასს.
// მაგალითად:
// calculateSalary(8) // 160
// calculateSalary(10, 30) // 300

function calculateSalary(hoursWorked, hourlyRate = 20) {
    return hoursWorked * hourlyRate;
}


// 3)შექმენი ფუნქცია numberType(num) რომელიც დააბრუნებს:
// "Positive"
// "Negative"
// "Zero"

function numberType(num) {
    return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
}

// 4)ბილეთის ფასი
// შექმენი ფუნქცია:
// ticketPrice(age, isStudent = false)
// წესები:
// 12 წლამდე → 5 ლარი.
// 12-დან 60 წლამდე → 15 ლარი.
// 60+ → 8 ლარი.

function ticketPrice(age, isStudent = false) {
    if (age < 12) {
        return 5;
    } else if (age >= 12 && age < 60) {
        return 15;
    } else {
        return 8;
    }
}

// 5)შექმენი ფუნქცია:
// grade(score)
// რომელიც აბრუნებს:
// 90-100 → "A"
// 80-89 → "B"
// 70-79 → "C"
// 60-69 → "D"
// 0-59 → "F"
// switch()

function grade(score) {
    switch (true) {
        case score >= 90:
            return "A";
            break
        case score >= 80:
            return "B";
            break
        case score >= 70:
            return "C";
            break
        case score >= 60:
            return "D";
            break
        default:
            return "F";
    }
}

