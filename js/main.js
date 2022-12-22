//////////////////////////////////////////////////////////////////
// [ Back to Top Button ]
const scrollBtn = document.querySelector('.back-to-top');
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add('activated');
    } else {
        scrollBtn.classList.remove('activated');
    }
};
document.addEventListener('scroll', () => {
    btnVisibility();
});
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});