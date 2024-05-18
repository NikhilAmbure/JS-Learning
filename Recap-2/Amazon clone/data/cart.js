export const cart = [
    {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2
    }, {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1 
    }
];

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
        // quantity: quantity,
        productId,
        quantity
      });
    }
  }