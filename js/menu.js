document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    const navToggle = document.querySelector('.nav-toggle'); // Optional mobile menu button
    
    // Desktop hover functionality
    dropdowns.forEach(dropdown => {
        // Desktop hover
        dropdown.addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) {
                dropdown.querySelector('.dropdown-menu').style.display = 'block';
            }
        });
        
        dropdown.addEventListener('mouseleave', () => {
            if (window.innerWidth > 768) {
                dropdown.querySelector('.dropdown-menu').style.display = 'none';
            }
        });
        
        // Mobile click functionality
        const link = dropdown.querySelector('a');
        link.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const menu = dropdown.querySelector('.dropdown-menu');
                const isOpen = menu.style.display === 'block';
                
                // Close all other dropdowns first
                document.querySelectorAll('.dropdown-menu').forEach(d => {
                    d.style.display = 'none';
                });
                
                // Toggle this one
                menu.style.display = isOpen ? 'none' : 'block';
            }
        });
    });
    
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && !e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    });
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}