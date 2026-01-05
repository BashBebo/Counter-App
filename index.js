let count = 0; // A ressainable varible is just used here to set the variable down to change

const countElement = document.getElementById('count'); // a non declared ressassianble variable creating the count element getting the element by id
const increaseButton = document.getElementById('increase'); // getting element id to create a varible called increaseButton
const decreaseButton = document.getElementById('decrease'); // Creating a decreaseButton variable
const resetButton = document.getElementById('reset'); // Creating a reset button variable

// Function to show the count
function UpdateDisplay() {     // function used to update the display
    countElement.textContent = count; // using the countElement to make sure the text content inside the element is the variable
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

// Add keyboard event listener for ArrowUp, ArrowDown, and 'r'/'R' keys
document.addEventListener('keydown', function(event) {
    if(event.key === 'ArrowUp') {
        IncreaseCount();
    } else if(event.key === 'ArrowDown') {
        DecreaseCount();
    } else if(event.key === 'r' || event.key === 'R') {
        ResetCount();
    }
});

// Add Event Listners to the buttons to update the functions
increaseButton.addEventListener('click', IncreaseCount);
decreaseButton.addEventListener('click', DecreaseCount);
resetButton.addEventListener('click', ResetCount);

// Initial display update
UpdateDisplay();

