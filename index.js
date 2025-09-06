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
    document.getElementById('count').style.color = 'green';
    if (count === 0) {
        document.getElementById('count').style.color = 'black';
    }
    if (count < 0) {
        document.getElementById('count').style.color = 'red';
    }
    UpdateDisplay();
}

//Function to decrease the count
function DecreaseCount() {
    count--;
    document.getElementById('count').style.color = 'red';
    if (count === 0) {
        document.getElementById('count').style.color = 'black';
    }
        if (count > 0) {
        document.getElementById('count').style.color = 'green';
    }
    UpdateDisplay();
}

//Function to reset the count
function ResetCount() {
    count = 0;
    document.getElementById('count').style.color = 'black';
    UpdateDisplay();
}

// Add Event Listners to the buttons to update the functions
increaseButton.addEventListener('click', IncreaseCount);
decreaseButton.addEventListener('click', DecreaseCount);
resetButton.addEventListener('click', ResetCount);

// Initial display update
UpdateDisplay();

