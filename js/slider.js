
// // // // //slider
// // // // // просто запрашиваем DOM
// var links = document.querySelectorAll(".itemLinks");
// let wrapper = document.querySelector("#wrapper");

// // // activeLink обеспечивает метку для активного элемента
// var activeLink = 0;

// // // устанавливаем отслеживание событий
// for (let i = 0; i < links.length; i++) {
//     let link = links[i];
//     link.addEventListener('click', setClickedItem, false);

//     // определяем элемент для activeLink
//     link.itemID = i;
// }

// // // устанавливаем первый элемент в качестве активного
// links[activeLink].classList.add("active");

// function setClickedItem(e) {
//     removeActiveLinks();

//     let clickedLink = e.target;
//     activeLink = clickedLink.itemID;

//     changePosition(clickedLink);
// }

// function removeActiveLinks() {
//     for (let i = 0; i < links.length; i++) {
//         links[i].classList.remove("active");
//     }
// }

// // // // Обработчик изменяет позицию слайдера, после того, как мы убедились,
// // // // что в качестве активной обозначена нужная нам ссылка.
// function changePosition(link) {
//     link.classList.add("active");

//     let position = link.getAttribute("data-pos");
//     wrapper.style.left = position;
// }

var swiper5 = new Swiper(".mySwiper5", {
    pagination: {
      el: ".swiper-pagination",
    },
  });


//   var swiperActive = new Swiper('.swiper3', {
//     initialSlide: 2,
//     }) 


var swiper = new Swiper(".mySwiper", {
  initialSlide: 1,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }})