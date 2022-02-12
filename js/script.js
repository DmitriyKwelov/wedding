const option = document.querySelectorAll('.preparation-option')
const d222 = document.querySelector('#d222')
console.log(option);
d222.addEventListener("click", function () {
    option.forEach(item => {
        item.classList.remove("active");
    })
    option[1].classList.add('active')
  })
