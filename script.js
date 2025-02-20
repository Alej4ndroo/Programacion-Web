document.addEventListener('DOMContentLoaded', function() {
    const mainText = document.querySelector('.main-text');
    const navTitle = document.getElementById('nav-title');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 10) { 
            navTitle.innerHTML = mainText.innerHTML; 
            navTitle.style.opacity = '1';
            navTitle.style.transform = 'translateY(0)';
            mainText.style.opacity = '0';
            mainText.style.transform = 'translateY(-50px)';
        } else {
            navTitle.innerHTML = ''; 
            navTitle.style.opacity = '0';
            navTitle.style.transform = 'translateY(20px)';
            mainText.style.opacity = '1';
            mainText.style.transform = 'translateY(0)';
        }
    });

    const section = document.querySelector(".second-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add("active"); 
            } else {
                section.classList.remove("active");
            }
        });
    }, { threshold: 0.5 });

    observer.observe(section);
});
