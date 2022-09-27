// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  console.log(price);
  const quantity = product.querySelector('.quantity input').value;
  console.log(quantity);
  // let nomVariable = myElement.innerHTML per a accedir al contingut d’un element.
  // calculate the subtotal price. Create a new variable.
  // Its value will be equal to the product of these values.
  const subtotalPrice = parseInt(price) * parseInt(quantity);
  // get the DOM element that should hold the subtotal.
  // Hint: it is the element with the class subtotal.
  // tag.innerHTML = <contingut>; per a afegir contingut a un element.
  console.log(product.querySelector('.subtotal span').innerHTML = subtotalPrice)
  return subtotalPrice;
}

function calculateAll() {
  //Complete the function named calculateAll(). Its purpose is to call the function updateSubtotal with every tr.product DOM node in the table#cart.
  // Also, let's add a new product to our index.html file. Duplicate the tr with the class product, rename the product inside, and change the product price.
  const products = document.querySelectorAll('.product');
  let totalPrice = 0;

  for (let i = 0; i < products.length; i++) {
    let element = products[i];
    // ITERATION 3
    totalPrice += updateSubtotal(element);
  }
  document.querySelector('#total-value span').innerHTML = totalPrice;
  
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
