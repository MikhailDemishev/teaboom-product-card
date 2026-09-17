const products = {
  '01306': {
    price: 326.4,
    oldPrice: 349.2,
  },
  '01307': {
    price: 1432,
    oldPrice: 1646,
  },
  '01308': {
    price: 2064,
    oldPrice: 2592,
  },
  '01309': {
    price: 6320,
    oldPrice: 8710,
  },
};

const formatPrice = (value) => value.toFixed(2).replace('.', ',');

const optionsEl = document.querySelectorAll('.option__input');
const pricesEl = document.querySelector('.prices');

function updateProduct(option) {
  const product = products[option.value];
  const price = `${formatPrice(product.price)} ₽`;

  if (product.oldPrice) {
    const oldPrice = `${formatPrice(product.oldPrice)} ₽`;
    const discount = Math.round((1 - product.price / product.oldPrice) * 100);

    pricesEl.innerHTML = `
      <span>
        <span class="prices__regular prices__regular--compare">${price}</span>
        <span class="prices__old">${oldPrice}</span>
      </span>
      <span class="prices__discount">Скидка: ${discount}%</span>
    `;
  } else {
    pricesEl.innerHTML = `
      <span>
        <span class="prices__regular">${price}</span>
      </span>
    `;
  }
}

optionsEl.forEach((option) => {
  option.addEventListener('change', () => {
    updateProduct(option);
  });
});

const checkedOption = document.querySelector('.option__input:checked');

if (checkedOption) {
  updateProduct(checkedOption);
}
