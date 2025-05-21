// Fonction de navigation vers une section
function navigate(sectionId) {
    document.querySelectorAll('.page').forEach(section => {
        section.classList.remove('active');
    });

const target = document.getElementById(sectionId);
if (target) {
    target.classList.add('active');
    target.scrollIntoView({ behavior: 'smooth' });
}
}

// Apparition des sections au scroll (effet supplémentaire)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, {
    threshold: 0.2,
});

document.querySelectorAll('.page').forEach(section => {
    observer.observe(section);
});
