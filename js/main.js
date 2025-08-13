// Boulefront3 - Main JavaScript File

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Search functionality
    const searchButton = document.querySelector('.search__button');
    const searchInput = document.querySelector('.search__input');
    
    // Search button click handler
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            handleSearch();
        });
    }
    
    // Enter key search handler
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // Search function
    function handleSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // For now, just show an alert - can be replaced with actual search logic
            alert('Sökning efter: "' + searchTerm + '"\n\n(Sökfunktionalitet kommer att implementeras)');
            console.log('Search term:', searchTerm);
        } else {
            alert('Vänligen ange en sökterm');
        }
    }
    
    // Newsletter form handler
    const newsletterForm = document.querySelector('.newsletter__form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent actual form submission
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            
            if (name && email) {
                // Simulate successful subscription
                alert('Tack ' + name + '!\n\nDu har nu prenumererat på Boulefronts nyhetsbrev.\nE-post: ' + email + '\n\n(Detta är en demo - ingen riktig prenumeration)');
                
                // Reset form
                newsletterForm.reset();
            } else {
                alert('Vänligen fyll i både namn och e-postadress');
            }
        });
    }
    
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add active state to navigation links
    const navigationLinks = document.querySelectorAll('.navigation__link');
    
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navigationLinks.forEach(navLink => {
                navLink.classList.remove('navigation__link--active');
            });
            
            // Add active class to clicked link (for future styling)
            this.classList.add('navigation__link--active');
        });
    });
    
    // Console log to confirm script is loaded
    console.log('Boulefront3 JavaScript loaded successfully!');
    console.log('Search functionality: ✅');
    console.log('Newsletter form: ✅');
    console.log('Navigation: ✅');
});

// Additional utility functions
function showNotification(message, type = 'info') {
    // Simple notification function for future use
    console.log(`${type.toUpperCase()}: ${message}`);
    // This can be enhanced with actual notification UI later
}

// Export functions for potential future use
window.Boulefront3 = {
    showNotification: showNotification
};