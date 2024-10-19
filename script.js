// Countdown reset to 3 hours for testing
let totalSeconds = 3 * 60 * 60;

function updateCountdown() {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    flipCard('hours', hours);
    flipCard('minutes', minutes);
    flipCard('seconds', seconds);

    totalSeconds--;

    if (totalSeconds < 0) {
        totalSeconds = 3 * 60 * 60; // Reset to 3 hours once it reaches zero
    }
}

function flipCard(id, newValue) {
    const flipCardElement = document.getElementById(id);
    const front = flipCardElement.querySelector('.flip-card-front');
    const back = flipCardElement.querySelector('.flip-card-back');

    const newValueStr = String(newValue).padStart(2, '0'); // Format value to 2 digits

    // Only flip if the new value is different from the front text
    if (front.textContent !== newValueStr) {
        flipCardElement.classList.add('flip'); // Start flip animation

        // Update the text after the animation ends
        setTimeout(() => {
            front.textContent = newValueStr;
            back.textContent = newValueStr; // Keep front and back synchronized
            flipCardElement.classList.remove('flip'); // End flip animation
        }, 100); // This should match the CSS transition duration
    }
}

// Start the countdown
setInterval(updateCountdown, 1000);
