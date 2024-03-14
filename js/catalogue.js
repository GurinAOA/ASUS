

  const choice = document.querySelector('#first_paragraph');
const choiceBtnFirst = document.querySelector('#first_btn');
const listFirst = document.querySelector('.menu-element_nav');

choiceBtnFirst.addEventListener("click", dropdown);

function dropdown() {
  listFirst.classList.toggle('show')
}



  
  const choiceMenu = document.querySelector('#second_paragraph');
  const choiceBtn = document.querySelector('#second_btn');
  const list = document.querySelector('.menu-element_nav__processor');
  
  choiceBtn.addEventListener("click", show);
  
  function show() {
    list.classList.toggle('show')
  }


  const choiceThird = document.querySelector('#third_paragraph');
const choiceBtnThird = document.querySelector('#third_btn');
const listThird = document.querySelector('#third_myDropdown');

choiceBtnThird.addEventListener("click", third);

function third() {
  listThird.classList.toggle('show')
}
const choiceFour = document.querySelector('#four_paragraph');
const choiceBtnFour = document.querySelector('#four_btn');
const listFour = document.querySelector('#four_myDropdown');

choiceBtnFour.addEventListener("click", four);

function four() {
  listFour.classList.toggle('show')
}

const choiceFive = document.querySelector('#five_paragraph');
const choiceBtnFive = document.querySelector('#five_btn');
const listFive = document.querySelector('#five_myDropdown');

choiceBtnFive.addEventListener("click", five);

function five() {
  listFive.classList.toggle('show')
}


const wrap = document.querySelector('#wrap__diagonal');
const diagonalBtn = document.querySelector('#btn__diagonal');
const dropdownProcessor = document.querySelector('#dropdown_processor');

diagonalBtn.addEventListener("click", change);

function change() {
  dropdownProcessor.classList.toggle('show')
}



