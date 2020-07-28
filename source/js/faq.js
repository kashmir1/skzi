let answers = document.querySelectorAll('.faq__answer');
let questions = document.querySelectorAll('.faq__question');

answers.forEach(function(el) {
  el.style.display = 'block';
});

questions.forEach(function(el) {
  el.onclick = () => {
    if (el.nextSibling.nextSibling.style.display === 'none') {
      el.nextSibling.nextSibling.style.display = 'block';
      el.classList.remove('faq__close', 'faq__hover');
      el.classList.add('faq__open', 'faq__question--open');
    } else {
      el.nextSibling.nextSibling.style.display = 'none';
      el.classList.add('faq__close', 'faq__hover');
      el.classList.remove('faq__open', 'faq__question--open');
    }
  };
});

let selectSpan = document.querySelectorAll('.form__span-select');
let themeButton = document.querySelectorAll('.select-selected');

// for (let i = 0; i < themeButton.length; i++) {
//   themeButton[i].addEventListener('click', function (evt) {
//     evt.preventDefault();
//     selectSpan[i].classList.toggle('form__span-select2');
//   })
// }
