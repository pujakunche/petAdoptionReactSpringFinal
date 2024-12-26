// Function to open the popup and set the correct title
function openPopup(action) {
    document.getElementById('popup-title').innerText = action
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('popup').style.justifyContent = 'center';
}

// Function to close the popup
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Form submit
document.getElementById('popup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Form Submitted!");
    closePopup();
});