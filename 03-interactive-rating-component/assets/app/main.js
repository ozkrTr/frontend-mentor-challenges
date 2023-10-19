const points = document.querySelectorAll('.point');
const submit = document.querySelector('.content__btn');
const content = document.querySelector('.content');
const modal = document.querySelector('.modal');
const result = document.querySelector('.modal__result');

let score = null;

points.forEach((point) => {
  point.addEventListener('click', (e) => {
    points.forEach((point) => {
      point.classList.remove('point--active');
    });

    point.classList.add('point--active');
  });
});

submit.addEventListener('click', (e) => {
  score = document.querySelector('.point--active');
  if (score !== null) {
    result.innerText = `yout selected ${score.innerText} out of 5`;

    content.classList.add('hide');
    modal.classList.remove('hide');
  } else {
    alert('por favor seleccine una opcion primero');
  }
});

document.body.addEventListener(
  'click',
  (e) => {
    if (e.target.dataset.id === 'body') {
      content.classList.remove('hide');
      modal.classList.add('hide');
    }
  },
  true
);
