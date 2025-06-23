const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

// Fixed: Use addEventListener instead of onClick
menuIcon.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Close menu when clicking on a nav link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navLinks.classList.remove('active');
    });
});