document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidenav a');
    const sections = document.querySelectorAll('section');

    // Function to update the active section
    function setActiveSection(sectionId) {
        sections.forEach(section => {
            section.style.display = 'none';
        });
        const activeSection = document.querySelector(sectionId);
        if (activeSection) {
            activeSection.style.display = 'block';
        }
    }

    // Function to handle navigation link clicks
    function handleNavLinkClick(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href');
        setActiveSection(sectionId);
        // Store the active section in localStorage
        localStorage.setItem('activeSection', sectionId);
        window.location.reload();
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavLinkClick);
    });

    // Retrieve and set the last active section from localStorage on page load
    const lastActiveSection = localStorage.getItem('activeSection');
    if (lastActiveSection) {
        setActiveSection(lastActiveSection);
    }
});