// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to trigger progress bar animation on scroll
function fillProgressBars() {
    const progressBars = document.querySelectorAll('.progress');
    
    progressBars.forEach(bar => {
        const value = bar.getAttribute('data-value');
        const sectionTop = document.getElementById('skills').offsetTop;
        const scrollPos = window.scrollY + window.innerHeight;

        if (scrollPos > sectionTop) {
            bar.style.width = value + '%';
        }
    });
}

// Listen for scroll event
window.addEventListener('scroll', fillProgressBars);

