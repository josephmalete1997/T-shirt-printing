// script.js
const container = document.querySelector('.scroll');
const content = document.querySelector('#horizontal-scroll');

let isDragging = false;
let startPosition = 0;
let scrollLeft = 0;

container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPosition = e.clientX;
    scrollLeft = content.scrollLeft;

    // Add a CSS class to change the cursor when dragging
    container.classList.add('grabbing');
});

container.addEventListener('mouseup', () => {
    isDragging = false;

    // Remove the cursor style
    container.classList.remove('grabbing');
});

container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startPosition;
    content.scrollLeft = scrollLeft - deltaX;
});

// Prevent the default drag-and-drop behavior on the content
content.addEventListener('dragstart', (e) => {
    e.preventDefault();
});