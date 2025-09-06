// Initialize count variable
let count = 0;

const countElement = document.getElementById('count');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');

// Function to show the count
function UpdateDisplay() {
    countElement.textContent = count;
}

//Function to increase the count
function IncreaseCount() {
    count++;
    UpdateDisplay();
}

//Function to decrease the count
function DecreaseCount() {
    count--;
    UpdateDisplay();
}

//Function to reset the count
function ResetCount() {
    count = 0;
    UpdateDisplay();
}

// Add Event Listners to the buttons to update the functions
increaseButton.addEventListener('click', IncreaseCount);
decreaseButton.addEventListener('click', DecreaseCount);
resetButton.addEventListener('click', ResetCount);

// Initial display update
UpdateDisplay();
