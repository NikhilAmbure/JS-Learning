// Generating html using above array
// Array from the products.js

import {cart as cart} from '../data/cart.js';
// .. goes outside of the current folder

let productsHTML = '';

products.forEach((product)=>{
    // Accumulator Pattern
    productsHTML += `
    <div class="product-container">
        <div class="product-image-container">
          <img class="product-image" src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name}
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars * 10}.png">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
          <select class="js-quantity-selector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary js-add-to-cart"
        data-product-id = "${product.id}">
          Add to Cart
        </button>
      </div>
    `;
});

console.log(productsHTML);

// Now put the html into the webpage
document.querySelector('.js-products-grid').
innerHTML = productsHTML;




// Add to Cart - adding eventlistener
// Data Attribute : - Is just another HTML attribute
//  - Allows us to attach any info of an element
// Syntax for data attribute : - have to start with "data-" 
document.querySelectorAll('.js-add-to-cart')
.forEach((button) => {
    button.addEventListener('click', ()=>{
    //    console.log(button.dataset); 
    // from line 50****
    //    console.log(button.dataset.productName);  
    //    Dataset - adds the all data attributes
    // const productId = button.dataset.productId;
    const {productId} = button.dataset;
    // productId for uniqueness for an each product
    
    let matchingItem; 

    cart.forEach((item)=>{
        if (productId === item.productId) {
            matchingItem = item;
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

    // for total cart-quantity
    let cartQuantity = 0;
    cart.forEach((item)=>{
        cartQuantity += item.quantity;
    });

    // console.log(cartQuantity);
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    // console.log(cart);
    });
});


