// Initialize the didPass variable with a boolean value
let didPass = true; // or false, depending on what you want to start with

// 1. Create a conditional statement that changes the answer variable to the string
// "Well done, you passed!" if didPass is true, or "Sorry, try again!" if didPass is false
let answer;

if (didPass) {
  answer = "Well done, you passed!";
} else {
  answer = "Sorry, try again!";
}

// Don't change the code below this line
module.exports = {
  didPass,
  answer
};
