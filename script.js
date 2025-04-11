// Change text content dynamically
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('textContent').textContent = "The text has been changed!";
});

// Modify CSS styles dynamically
document.getElementById('changeStyleButton').addEventListener('click', function() {
    const box = document.getElementById('styledBox');
    box.style.backgroundColor = 'lightcoral';
    box.style.color = 'white';
    box.style.padding = '20px';
    box.style.textAlign = 'center';
    box.style.borderRadius = '8px';
});

// Add or remove an element when the button is clicked
document.getElementById('toggleElementButton').addEventListener('click', function() {
    const extraElement = document.getElementById('extraElement');
    if (extraElement.style.display === 'none') {
        extraElement.style.display = 'block';
    } else {
        extraElement.style.display = 'none';
    }
});
