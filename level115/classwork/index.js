let value = 0
if (value) {
    console.log("this value is truthy");
}
else {
    console.log("this value is falsey");
}


let value = 'goal'
if (value && value.startsWith("g")) {
    console.log("truthy and startswith letter g");
}
else {
    console.log("falsey and does not staertswith letter g");
}