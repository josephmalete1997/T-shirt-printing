document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidenav a');
    const sections = document.querySelectorAll('section');
    const page_title = document.getElementById('page-name');

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

    //loader for page redirect
    function pageRedirect(op) {
        const loaders = document.getElementById("loaders");
        loaders.style.display = "flex";
        loaders.style.opacity = op;
        loaders.style.zIndex = "186";
        document.querySelector(".count").innerHTML = `<img src="load.png" width="100%">`;

        return loaders;
    }

    // Function to handle navigation link clicks
    function handleNavLinkClick(event) {
        event.preventDefault();
        const sectionId = this.getAttribute('href');
        setActiveSection(sectionId);

        //change head-title




        //Start loading
        let x = pageRedirect("1")
            // -----------
        let startStart = setInterval(pageRedirect, 100)
        setTimeout(() => {
            clearInterval(startStart);
            x.style.display = "none";
            x.style.opacity = "0.8";
            document.querySelector(".count").innerHTML = ` <span class="count-up">0</span>%`;
            // refresh page
            // window.location.reload();
            // Store the active section in localStorage
            localStorage.setItem('activeSection', sectionId);
        }, 1000)
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