// Function expression to select Element
const selectElement = (s) => document.querySelector(s);

// Open the menu on click
selectElement('open').addEventListener('click', () => {
    selectElement('.nav-list').add('active');
});
// Close the menu on click
selectElement('close').addEventListener('click', () => {
    selectElement('.nav-list').remove('active');
});
