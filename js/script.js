const option = document.querySelectorAll('.preparation-option')
const btns = document.querySelectorAll('#preparation-nav div')
const portfolio = document.querySelectorAll('.my-swiper-slide')
const crosses = document.querySelectorAll('.cross')
const navSlides = document.querySelectorAll('.swiper-slide-nav')
const sliderPortfolio = document.querySelector('.swiper-wrapper-portfolio')
const section2 = document.getElementById('section2');

document.getElementById('line-for-section-left-section2').style.height = `${section2.scrollHeight}px`
document.getElementById('line-for-section-right-section2').style.height = `${section2.scrollHeight}px`
document.getElementById('line-for-section-left-section4').style.height = `${section4.scrollHeight}px`
document.getElementById('line-for-section-right-section4').style.height = `${section4.scrollHeight}px`
document.getElementById('line-for-section-left-section5').style.height = `${section5.scrollHeight - 10}px`
document.getElementById('line-for-section-right-section5').style.height = `${section5.scrollHeight - 10}px`

if (window.screen.width >= 1140) {
    navSlides.forEach(item => {
        const width = item.childNodes[1].offsetWidth
        if (item == navSlides[navSlides.length - 1]) {
            item.style.width = `${(width + 10) + ((window.screen.width - 1140) / 2)}px`;
        } else {
            item.style.width = `${width + 10}px`;
        }
    })
} else {
    navSlides.forEach(item => {
        const width = item.childNodes[1].offsetWidth
        item.style.width = `${width + 10}px`;
    })
}
if (window.screen.width > 768) {
    if (window.screen.width >= 1140) {
        const width = ((window.screen.width - 1300) / 2) + 850;
        const lastSliderElement = document.createElement("div");
        lastSliderElement.classList.add('swiper-slide')
        lastSliderElement.style.width = `${width}px`;
        sliderPortfolio.append(lastSliderElement)
    } else {
        const width = ((window.screen.width - 1300) / 2) + 1050;
        const lastSliderElement = document.createElement("div");
        lastSliderElement.classList.add('swiper-slide')
        lastSliderElement.style.width = `${width}px`;
        sliderPortfolio.append(lastSliderElement)
    }
}
if (window.screen.width > 768) {
    portfolio.forEach(item => {
        item.addEventListener("click", function (e) {
            if (item.classList.contains("active") === false) {
                if (item.childNodes[3].childNodes[7] !== e.target) {
                    portfolio.forEach(item => {
                        item.classList.remove('active')
                        if (item.childNodes[3] !== undefined) {
                            item.childNodes[3].classList.remove('active')
                        }
                    })
                    item.childNodes[3].classList.add('active')
                    item.classList.add('active')
                }
                if (window.screen.width < 768) {
                    portfolio.forEach(item => {
                        item.classList.remove('active')
                        if (item.childNodes[3] !== undefined) {
                            item.childNodes[3].classList.remove('active')
                        }
                    })
                    item.childNodes[3].classList.add('active')
                    item.classList.add('active')
                }
            }
        })
    });
} else {
    portfolio.forEach(item => {
        item.addEventListener("click", function (e) {
            if (item.classList.contains("active-m") === false) {
                if (item.childNodes[3].childNodes[7] !== e.target) {
                    portfolio.forEach(item => {
                        item.classList.remove('active-m')
                        if (item.childNodes[3] !== undefined) {
                            item.childNodes[3].classList.remove('active-m')
                        }
                    })
                    item.childNodes[3].classList.add('active-m')
                    item.classList.add('active-m')
                }
                if (window.screen.width < 768) {
                    portfolio.forEach(item => {
                        item.classList.remove('active-m')
                        if (item.childNodes[3] !== undefined) {
                            item.childNodes[3].classList.remove('active-m')
                        }
                    })
                    item.childNodes[3].classList.add('active-m')
                    item.classList.add('active-m')
                }
            }
        })
    });
}

crosses.forEach(cross => {
    cross.addEventListener("click", function () {
        portfolio.forEach(item => {
            if (item.classList.contains("active")) {
                item.classList.remove('active')
                item.childNodes[3].classList.remove('active')
            }
        })
    })
})

btns.forEach(btn => {
    btn.addEventListener("click", function (e) {
        option.forEach(item => {
            item.classList.remove("active");
        })
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("active")
            if (btns[i] == btn) {
                option[i].classList.add('active')
            }
        }
        btn.classList.add('active')
    })
});

var swiper = new Swiper(".my-slide", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    observer: true,
    observeSlideChildren: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".swiper-nav", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

