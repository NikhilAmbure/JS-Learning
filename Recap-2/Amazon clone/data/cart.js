export const cart = [];

// Add to Cart - adding eventlistener
// Data Attribute : - Is just another HTML attribute
//  - Allows us to attach any info of an element
// Syntax for data attribute : - have to start with "data-" 

export function addToCart(productId) {
    let matchingItem;
  
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
    const quantity = Number(quantitySelector.value);
  
    if (matchingItem) {
      // matchingItem.quantity += 1;
      matchingItem.quantity += quantity;
    } else {
      cart.push({
        // productId: productId,
        // quantity: 1,
        // quantity: quantity,
        productId,
        quantity
      });
    }
  }