const summaryContainer = document.querySelector('.summary__items');
const url = './data.json';

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  addSummary(data);
}

fetchData(url);

function addSummary(data) {
  data.forEach((element) => {
    const div = document.createElement('div');
    div.classList.add('summary__item', 'summary__item--' + element.category);
    div.innerHTML = `
    <div class="item__category item__category--${element.category}">
              <img
                src=${element.icon}
                alt="icon of ${element.category} "
                class="category__icon"
              />
              <p class="category__text">${element.category}</p>
            </div>

            <div class="item__score">
              <p class="score__text">
                ${element.score}<span class="score__text--light"> / 100</span>
              </p>
            </div>
    `;

    summaryContainer.append(div);
  });
}
