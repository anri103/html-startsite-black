//////////////////////////////////////////////////////////////////
// [ Тень меню при скролле ]

window.onscroll = function() {
    const windowScroll = window.scrollY;
	const fixedMenu = document.querySelector('.sticky-heading');
    if(windowScroll > 200) {
        fixedMenu.classList.add('shadow-sm');
    }
    else {
        fixedMenu.classList.remove('shadow-sm');
    }
}

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

const portfolioSwiper = new Swiper('.portfolioSwiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.05,
    autoplay: {
        delay: 3500,
    },
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    navigation: {
        nextEl: '#portfolio-next',
        prevEl: '#portfolio-prev',
    },
	breakpoints: {
        768: {
            slidesPerView: 2,
        },
    },
});

const changeclientsSwiper = new Swiper('.changeclientsSwiper', {
    loop: true,
    allowTouchMove: false,
    navigation: {
        nextEl: '#changeclientsSwiper-next',
        prevEl: '#changeclientsSwiper-prev',
    },
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
// [ PHONE MASK ]

var maskPhone = document.querySelectorAll('.maskPhone')
var maskDate = document.querySelectorAll('.maskDate')

maskPhone.forEach(function (el) {
    IMask(el, {
        mask: '+{7}(000)000-00-00'
    });
});

maskDate.forEach(function (el) {
    IMask(el, {
        mask: Date,
        min: new Date(1900, 0, 1),
        lazy: false
    });
});

//////////////////////////////////////////////////////////////////
// [ Enable Fancybox ]

Fancybox.bind("[data-fancybox]", {
    Thumbs: {
        type: "classic",
    },
    Toolbar: {
        display: {
            left: [],
            middle: [],
            right: ["close"],
        },
    },
});