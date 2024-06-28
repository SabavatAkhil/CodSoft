document.addEventListener("DOMContentLoaded", function() {
    const categoryLinks = document.querySelectorAll(".category");
    const menuItems = document.querySelectorAll(".menu-item");

    categoryLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Remove active class from all links
            categoryLinks.forEach(link => link.classList.remove("active"));

            // Add active class to the clicked link
            this.classList.add("active");

            // Get the category to filter
            const category = this.getAttribute("data-category");

            // Show/Hide menu items based on the selected category
            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});