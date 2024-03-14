//   // Закройте выпадающее меню, если пользователь щелкает за его пределами
window.onclick = function (event) {
  if (!event.target.matches('.choice__processor')) {
    let dropdowns = document.getElementsByClassName(".menu-element_nav__processor");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





// const choiceMenu = document.querySelector('#second_paragraph');
// const choiceBtn = document.querySelector('#second_btn');
// const list = document.querySelector('.menu-element_nav__processor');

// choiceBtn.addEventListener("click", show);

// function show() {
//   list.classList.toggle('show')
// }



// const choice = document.querySelector('#first_paragraph');
// const choiceBtnFirst = document.querySelector('#first_btn');
// const listFirst = document.querySelector('.menu-element_nav');

// choiceBtnFirst.addEventListener("click", dropdown);

// function dropdown() {
//   listFirst.classList.toggle('show')
// }

// const choiceThird = document.querySelector('#third_paragraph');
// const choiceBtnThird = document.querySelector('#third_btn');
// const listThird = document.querySelector('#third_myDropdown');

// choiceBtnThird.addEventListener("click", third);

// function third() {
//   listThird.classList.toggle('show')
// }
// const choiceFour = document.querySelector('#four_paragraph');
// const choiceBtnFour = document.querySelector('#four_btn');
// const listFour = document.querySelector('#four_myDropdown');

// choiceBtnFour.addEventListener("click", four);

// function four() {
//   listFour.classList.toggle('show')
// }

// const choiceFive = document.querySelector('#five_paragraph');
// const choiceBtnFive = document.querySelector('#five_btn');
// const listFive = document.querySelector('#five_myDropdown');

// choiceBtnFive.addEventListener("click", five);

// function five() {
//   listFive.classList.toggle('show')
// }



// const wrap = document.querySelector('#wrap__diagonal');
// const diagonalBtn = document.querySelector('#btn__diagonal');
// const dropdownProcessor = document.querySelector('#dropdown_processor');

// diagonalBtn.addEventListener("click", change);

// function change() {
//   dropdownProcessor.classList.toggle('show')
// }



// document.querySelectorAll(".main__catalogue__wrap").addEventListener("click", function() {

//   window.location.href = "http://127.0.0.1:5500/categories.html";
  
//   });



  
const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

new Swiper(".swiper3", {

  loop: true,
  centeredSlides: true,

  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {

    clickable: true,
    speed: 1000
  },
  speed: 1000,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});
