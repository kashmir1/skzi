let answers = document.querySelectorAll('.faq__answer');
let questions = document.querySelectorAll('.faq__question');

answers.forEach(function(el) {
  el.style.display = 'none';
});

questions.forEach(function(el) {
  el.onclick = () => {
    if (el.nextSibling.nextSibling.style.display === 'none') {
      el.nextSibling.nextSibling.style.display = 'block';
      el.classList.remove('faq__close');
      el.classList.add('faq__open', 'faq__question--open');
    } else {
      el.nextSibling.nextSibling.style.display = 'none';
      el.classList.add('faq__close');
      el.classList.remove('faq__open', 'faq__question--open');
    }
  };
});
