// Example of adding to cart (just a console log for now)
const addToCartButton = document.querySelector('.add-to-cart');

if (addToCartButton) {
  addToCartButton.addEventListener('click', () => {
    console.log('Product added to cart');
  });
}
