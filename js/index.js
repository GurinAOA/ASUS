
$(document).ready(function () {
  $('.burger-menu').click(function (event) {
    $('.burger-menu,.container__pages').toggleClass('active');
    $('.burger-close').toggleClass('active');
    $('body').toggleClass('lock');
  });
})
$(document).ready(function () {
  $('.burger-close').click(function (event) {
    $('.burger-menu,.container__pages').toggleClass('active');
    $('.burger-close').toggleClass('active');
    $('body').toggleClass('lock');
  });
})



let flag = false;
$('.choice').click(function () {
  if (!flag) {
    $('.menu-element').slideDown("slow");
  } else {
    $('.menu-element').slideUp();
  }
  flag = !flag;
})


const search = document.querySelector('.search-loop');
const searchHeader = document.querySelector('.search__img');
const wrapSearch = document.querySelector('.wrapper-form_search');
const btnCloseSearch = document.querySelector('.close-search');
searchHeader.addEventListener('click', searchOpen)
function searchOpen() {
  wrapSearch.classList.toggle('hide')
}
btnCloseSearch.addEventListener('click', closeSearch)
function closeSearch() {
  wrapSearch.classList.toggle('hide')
}








// document.addEventListener( 'click', (e) => {
// 	const withinBoundaries = e.composedPath().includes(wrapSearch);

// 	if ( ! withinBoundaries ) {
// 		wrapSearch.style.display = 'none'; // скрываем элемент т к клик был за его пределами
// 	}
// })



//форма
const btnOpen = document.querySelector('.button-feedback');
const content = document.querySelector('.box-inner');
const popup = document.querySelector('.box');
const btnClose = document.querySelector('.modal__close');
const feedbackForm = document.querySelector('#feedbackForm');

btnOpen.addEventListener('click', function () {
  popup.classList.add('open');
})

btnClose.addEventListener('click', () => {
  popup.classList.remove('open');

});





// popup.addEventListener('click', (e) => {
//   if (e.target === popup) {
//     popup.classList.remove('open');

//   }
// });






const footerLisFeedback = document.querySelector('#footer_myDropdown_feedback');
const footerListProd = document.querySelector('#footer_myDropdown_prod');
const footerListBrand = document.querySelector('#footer_myDropdown_brand');

const footerDrFeedback = document.querySelector('#btn-footer_feedback');
const footerDrBrand = document.querySelector('#btn-footer_brend');
const footerDrProd = document.querySelector('.footer-nav-list_title');
const footerdiv = document.querySelector('.footer-nav-list_btn')
const footerdivFeedback = document.querySelector('#feedback')
const footerdivBrand = document.querySelector('#brand')



footerdivFeedback.addEventListener("click", appear);

function appear() {
  footerLisFeedback.classList.toggle('add');
  if (footerLisFeedback.classList.contains('add')) {
    footerDrFeedback.style.color = "#025DC5";
  }
  else {
    footerDrFeedback.style.color = "#FFF";
  }

}


footerdivBrand.addEventListener("click", update);
function update() {
  footerListBrand.classList.toggle('add');
  if (footerListBrand.classList.contains('add')) {
    footerDrBrand.style.color = "#025DC5";
  }
  else {
    footerDrBrand.style.color = "#FFF";
  }

}



footerdiv.addEventListener("click", hidden);

function hidden() {
  footerListProd.classList.toggle('add');
  if (footerListProd.classList.contains('add')) {
    footerDrProd.style.color = "#025DC5";
  }
  else {
    footerDrProd.style.color = "#FFF";
  }

}



const searchInput = document.querySelector('#search-input');
const searchList = document.querySelector('.search-list');
searchInput.addEventListener("input", inputShow);

function inputShow() {
  searchList.classList.toggle('new');

}

