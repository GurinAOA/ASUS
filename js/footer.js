





const choiceNav = document.querySelector('.nav-list-production');
const choiceBtnFirst = document.querySelector('#btn-footer_prod');
const listFirst = document.querySelector('#footer_myDropdown_prod');

choiceBtnFirst.addEventListener("click", dropdown);

function dropdown() {
  listFirst.classList.toggle('show')
}
