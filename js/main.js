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
// [ Top Menu Shadow ]

window.onscroll = function() {
    const windowScroll = window.scrollY;
	const fixedMenu = document.querySelector('.header.fixed-top');
    if(windowScroll > 100) {
        fixedMenu.style.boxShadow = '0 .125rem .25rem rgba(33,37,41,0.075)';
    }
    else {
        fixedMenu.style.boxShadow = 'none';
    }
}

//////////////////////////////////////////////////////////////////
// [ Слайдеры на странице index.html ]

const heroSwiper = new Swiper('.heroSwiper', {
    loop: true,
    autoplay: {
        delay: 3500,
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
    // autoplay: {
    //     delay: 3500,
    // },
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
        delay: 3500,
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});

//////////////////////////////////////////////////////////////////
// [ Слайдер на странице blog-item.html ]

const relatedPosts = new Swiper('.relatedPosts', {
    slidesPerView: 1,
    navigation: {
        nextEl: '#relatedPosts-next',
        prevEl: '#relatedPosts-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ Слайдер на странице shop-item.html ]

const relatedProducts = new Swiper('.relatedProducts', {
    slidesPerView: 1,
    navigation: {
        nextEl: '#relatedProducts-next',
        prevEl: '#relatedProducts-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },
});

//////////////////////////////////////////////////////////////////
// [ All Parallax ]

for (var e = document.querySelectorAll('.parallax'), t = 0; t < e.length; t++) new Parallax(e[t]);