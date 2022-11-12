/*slider*/

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 20,
    startPosition: 0,
    items: 1,
    responsive: {
        640: {
            items: 3,
            startPosition: 1
        },
        1200: {
            items: 3,
            margin: 30
        }
    }
});

$('.slider__btn--prev').click(function () {
    owl.trigger('prev.owl.carousel');
});

$('.slider__btn--next').click(function () {
    owl.trigger('next.owl.carousel');
});

/*burger-menu*/

const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('nav');

navBtn.onclick = function () {
    navBtn.classList.toggle('active');
    nav.classList.toggle('nav--mobile');
    document.body.classList.toggle('no-scroll');
}

/*tabs*/

let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item');
    let tabContent = document.querySelectorAll('.tab');
    let tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('isActive');
        });
        this.classList.add('isActive');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName)
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('isActive') : item.classList.remove('isActive');
        })
    }
};

tab();