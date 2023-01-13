//////////////////////////////////////////////////////////////////
// [ Back to Top Button ]

const scrollBtn = document.querySelector('.btn-scroll-top');
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.classList.add('show');
    } else {
        scrollBtn.classList.remove('show');
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

//////////////////////////////////////////////////////////////////
// [ Слайдеры на странице index.html ]

const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: '#heroSwiper-next',
        prevEl: '#heroSwiper-prev',
    },
});

const portfolioSwiper = new Swiper('.portfolioSwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    autoplay: {
        delay: 4000,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
});

//////////////////////////////////////////////////////////////////
// [ Слайдер на странице about.html ]

const testimonialSwiper = new Swiper('.testimonialSwiper', {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});