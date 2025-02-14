// Function to shrink the button on click (optional)
function shrinkOption(element) {
    if (!element) return; // Check if the element exists
    element.style.transition = 'transform 0.3s';
    element.style.transform = 'scale(0.9)';
    setTimeout(function() {
        element.style.transform = 'scale(1)'; // Reset scale back to 1 after shrinking
    }, 300);
}

// Function to open a new window for the new game
function openInterface() {
    window.open("interface.html", "_blank"); // Open the new game interface
}

// Function to show the confirmation message when clicking "Exit"
function showConfirmation() {
    const confirmationBox = document.getElementById('confirmation-box');
    const overlay = document.getElementById('overlay');
    if (confirmationBox && overlay) {
        confirmationBox.style.display = 'block';  // Show the confirmation box
        overlay.style.display = 'block';  // Show the overlay
    } else {
        console.error('Confirmation box or overlay not found!');
    }
}

// Function to close the confirmation box
function closeConfirmation() {
    const confirmationBox = document.getElementById('confirmation-box');
    const overlay = document.getElementById('overlay');
    if (confirmationBox && overlay) {
        confirmationBox.style.display = 'none';  // Hide the confirmation box
        overlay.style.display = 'none';  // Hide the overlay
    } else {
        console.error('Confirmation box or overlay not found!');
    }
}

// Function to exit the game (or close the window in some browsers)
function exitGame() {
    window.close(); // This will only work if the page was opened via window.open()
}

// Event listeners for the options (new game, exit, about)
document.addEventListener('DOMContentLoaded', function() {
    const newGameLink = document.getElementById('newGameLink');
    const aboutLink = document.getElementById('aboutLink');
    const exitLink = document.getElementById('exitLink');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // New game link functionality
    if (newGameLink) {
        newGameLink.addEventListener('click', function(event) {
            shrinkOption(newGameLink);
            openInterface(); // Open new game interface
        });
    }

    // About link (this just links to the about page)
    if (aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            shrinkOption(aboutLink);
        });
    }

    // Exit link functionality
    if (exitLink) {
        exitLink.addEventListener('click', function(event) {
            shrinkOption(exitLink);
            showConfirmation(); // Show confirmation before exiting
        });
    }

    // Yes button in confirmation box (exit the game)
    if (yesButton) {
        yesButton.addEventListener('click', exitGame); // Exit the game
    }

    // No button in confirmation box (close confirmation box)
    if (noButton) {
        noButton.addEventListener('click', closeConfirmation); // Close confirmation box
    }
});
