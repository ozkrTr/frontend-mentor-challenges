const questions = document.querySelectorAll('.question');
let last = null;

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    e.preventDefault();

    if (last !== null && last != question) {
      last.removeAttribute('open');
    }

    if (question.hasAttribute('open')) {
      question.removeAttribute('open');
    } else {
      question.setAttribute('open', '');
    }

    last = question;
  });
});
