// Function to set a cookie  
function setCookie(name, value, days) {  
    const expires = new Date(Date.now() + days * 864e5).toUTCString();  
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';  
}  

// Function to get a cookie value by name  
function getCookie(name) {  
    return document.cookie.split('; ').reduce((r, v) => {  
        const parts = v.split('=');  
        return parts[0] === name ? decodeURIComponent(parts[1]) : r;  
    }, '');  
}  

// Function to apply saved preferences  
function applyPreferences() {  
    const savedFontSize = getCookie('fontSize');  
    const savedFontColor = getCookie('fontColor');  

    if (savedFontSize) {  
        document.body.style.fontSize = savedFontSize + 'px';  
        document.getElementById('fontsize').value = savedFontSize;  
    }  

    if (savedFontColor) {  
        document.body.style.color = savedFontColor;  
        document.getElementById('fontcolor').value = savedFontColor;  
    }  
}  

// Event listener for form submission  
document.getElementById('settings-form').addEventListener('submit', function(event) {  
    event.preventDefault(); // Prevent the form from submitting  

    const fontSize = document.getElementById('fontsize').value;  
    const fontColor = document.getElementById('fontcolor').value;  

    setCookie('fontSize', fontSize, 30); // Save font size for 30 days  
    setCookie('fontColor', fontColor, 30); // Save font color for 30 days  

    // Apply the changes immediately  
    document.body.style.fontSize = fontSize + 'px';  
    document.body.style.color = fontColor;  
});  

// Apply preferences on page load  
window.onload = applyPreferences;