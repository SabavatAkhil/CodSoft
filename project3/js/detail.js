// Add any JavaScript needed for the detail page
document.addEventListener("DOMContentLoaded", function() {
    console.log("Detail page loaded.");
    document.querySelector(".back-button").addEventListener("click", function() {
        window.history.back();
    });
});