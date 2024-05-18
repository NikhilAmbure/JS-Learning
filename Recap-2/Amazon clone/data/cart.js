// JSON.parse to convert that string into array
export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [
        {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2
        }, {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1 
        }
    ];
}

// function to create a localstorage- it doesn't get reset when we refresh
// localstorage only gets the string so to convert into string => JSON.stringify(cart)
export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

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

    saveToStorage();
  }

export function removeFromCart(productId) {
    const newCart = [];

    cart.forEach((cartItem)=>{
        if (cartItem.productId != productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}