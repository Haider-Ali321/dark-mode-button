const body = document.getElementById('body');
const toggleButton = document.getElementById('toggleButton');

// Check the user's preference from local storage
const isNightMode = localStorage.getItem('nightMode') === 'enabled';

// Apply initial theme
if (isNightMode) {
    enableNightMode();
}

// Function to enable night mode
function enableNightMode() {
    body.classList.add('night-mode');
    localStorage.setItem('nightMode', 'enabled');
}

// Function to disable night mode
function disableNightMode() {
    body.classList.remove('night-mode');
    localStorage.setItem('nightMode', null);
}

// Toggle night mode on button click
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('night-mode')) {
        disableNightMode();
    } else {
        enableNightMode();
    }
});
