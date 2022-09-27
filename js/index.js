// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  // console.log(price);
  const quantity = product.querySelector('.quantity input').value;
  // console.log(quantity);
  // let nomVariable = myElement.innerHTML per a accedir al contingut d’un element.
  // calculate the subtotal price. Create a new variable.
  // Its value will be equal to the product of these values.
  const subtotalPrice = parseInt(price) * parseInt(quantity);
  // get the DOM element that should hold the subtotal.
  // Hint: it is the element with the class subtotal.
  // tag.innerHTML = <contingut>; per a afegir contingut a un element.
  // console.log(product.querySelector('.subtotal span').innerHTML = subtotalPrice)
  product.querySelector('.subtotal span').innerHTML = subtotalPrice;

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
    // console.log(updateSubtotal(element));
    // console.log(totalPrice);
  }
  document.querySelector('#total-value span').innerHTML = totalPrice;






}

// ITERATION 4
// But let's try to solve our problem one bit at a time.
// Inside of the existing function you're passing to window.addEventListener(),
// start with querying the document for all "Remove" buttons,
// loop through them, and add a click event listener to each,
// passing a named function removeProduct as the callback argument.
// If you need a hint on how to do this,
// just take a look at how we did it with adding event listener on the calculatePricesBtn.

// We already declared removeProduct(event) and added some starter code.
// After you are done with querying the remove buttons and adding the click event listener on them, open the console and click on any Remove button.

// As we can see, removeProduct(event) expects the event as a single argument,
// and that is going to trigger the removal of the corresponding product from the cart.


function removeProduct(event) {
// currentTarget hace referencia al elemento del dom en el que se ha hecho clic
  const target = event.currentTarget;
  // console.log('The target in remove is:', target);
  // Con parentNode nos movemos a la etiqueta html que contiene al elemento que tenemos en target
  //  en este caso hacemos clic en el button y nos movemos al padre 
  const productToRemove  =  target.parentNode.parentNode;
  const parent = productToRemove.parentNode

  parent.removeChild(productToRemove);
  calculateAll()
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}








window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  // console.log(removeButtons)

  for (let i = 0; i < removeButtons.length; i++) {
    const element = removeButtons[i];
    // Agregamos el evento de click para cada boton de la lista de tareas
    element.addEventListener('click', removeProduct);
  }

  const createProduct = document.getElementById('create');
  createProduct.addEventListener('click', createProduct);
});
