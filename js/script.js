var swiper = new Swiper(".my-slide", {
    slidesPerView: "auto",
    spaceBetween: 30,
    freeMode: true,
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

const option = document.querySelectorAll('.preparation-option')
const btns = document.querySelectorAll('#preparation-nav div')
const portfolio = document.querySelectorAll('.my-swiper-slide')
const crosses = document.querySelectorAll('.cross')

portfolio.forEach(item => {
    item.addEventListener("click", function (e) {
        // if (item.classList.contains("active") === false) {
        //     portfolio.forEach(item => {
        //         item.classList.remove('active')  
        //         if (item.childNodes[3] !== undefined) {
        //             item.childNodes[3].classList.remove('active')
        //         }
        //     })
        // }
        if (item.classList.contains("active") === false) {
            console.log(item.childNodes[3].childNodes[7])
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
        }
        // console.log(item.childNodes[3]);
    })
});

crosses.forEach(cross => {
    cross.addEventListener("click", function () {
        portfolio.forEach(item => {
            if (item.classList.contains("active")) {
                console.log(item)
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
if( window.screen.width <= 768 ){
    console.log('11');
} else {
    console.log('22');
} 

