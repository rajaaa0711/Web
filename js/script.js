document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const body = document.body;

    // Event listener to fade out when link is clicked
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent default link behavior
            let targetUrl = this.href;

            // Add fade-out class for the transition
            body.classList.add("fade-out");

            // After fade-out ends, navigate to the clicked page
            setTimeout(function() {
                window.location.href = targetUrl;
            }, 500); // Match the fade-out time in CSS
        });
    });

    // Add fade-in class when the page loads
    body.classList.add("fade-in");
});
