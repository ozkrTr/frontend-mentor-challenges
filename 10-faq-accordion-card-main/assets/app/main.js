const questions = document.querySelectorAll('.question');

const cerrarTodo = () => {
  questions.forEach((question) => {
    if (question.open) {
      question.removeAttribute('open');
    }
  });
};

questions.forEach((question) => {
  question.addEventListener('click', (e) => {
    cerrarTodo();
  });
});
