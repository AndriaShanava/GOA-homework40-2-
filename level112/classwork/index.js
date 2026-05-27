// Challenge: Smart Traffic Light Controller
// Description:
// You are building an automated traffic controller system. Write a function trafficControl that takes two arguments: trafficLight (string) and carSpeed (number), and returns a specific message based on the driving conditions.

// The logic must comply with the following rules using only if-else statements:

// If the light is "red":

// If speed is greater than 0, return: "Danger! Stop the car immediately!"

// Otherwise (speed is 0), return: "Safe. The car is stopped."

// If the light is "yellow":

// If speed is greater than 20, return: "Slow down, the light is changing!"

// Otherwise, return: "Prepare to stop."

// If the light is "green":

// If speed is greater than 80, return: "You are speeding! Slow down!"

// Otherwise, return: "Road is clear, you can drive."

// If the light is anything else, return: "System error: Unknown signal!"

function trafficControl(trafficLight, carSpeed) {
    if (trafficControl === "red") {
        if (carSpeed > 0){
            return "Danger! Stop the car immediately!"
        }
        else{
            return "Safe. The car is stopped."
        }
    }
    else if (trafficLight === "yellow") {
        if (carspeed > 20) {
            return "Slow down, the light is changing!"
        }
        else{
            return "Prepare to stop."
        }
    }
    else if (trafficLight === "green") {
        if (carspeed > 80) {
            return "You are speeding! Slow down!"
        }
        else{
            return "Road is clear, you can drive."
        }
    }
    else{
        return "System error: Unknown signal!"
    }
}


function checkThermostat(temperature, season) {
    if (season === "winter") {
        if (temperature < 18) {
            return "Turn on heating";
        } else {
            return "Heating off";
        }
    } else if (season === "summer") {
        if (temperature > 25) {
            return "Turn on cooling";
        } else {
            return "Cooling off";
        }
    } else {
        return "Invalid season";
    }
}


function gradeCalculator(score){
    if (score >= 90){
        return "A"
    }
    else if (score >= 80){
        return "B"
    }
    else if (score >= 70){
        return "C"
    }
    else if (score >= 51){
        return "D"
    }
    else{
        return "F"
    }
}


function validatePassword(length, hasSpecialChar) {
    if (length < 8){
        return "Too short"
    }
    else if (hasSpecialChar){
        return "Strong password"
    }
    else{
        return "Medium password"
    }
}