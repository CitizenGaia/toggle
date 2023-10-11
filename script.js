function toggleText(elementId) {
    var textElement = document.getElementById(elementId);

    // Toggle the 'visible' class
    textElement.classList.toggle('visible');

    // Toggle the 'active' class for the button
    var button = textElement.previousElementSibling;
    button.classList.toggle('active');
}
