//your JS code here. If required.
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
document.getElementById('customizationForm').addEventListener('submit', function (e) {  
    e.preventDefault(); // Prevent the default form submission  
    const fontSize = document.getElementById('fontsize').value;  
    const fontColor = document.getElementById('fontcolor').value;  

    // Save preferences in cookies  
    setCookie('fontSize', fontSize, 30); // Save for 30 days  
    setCookie('fontColor', fontColor, 30); // Save for 30 days  

    // Apply changes immediately  
    document.body.style.fontSize = fontSize + 'px';  
    document.body.style.color = fontColor;  
});  

// Apply preferences on page load  
applyPreferences();