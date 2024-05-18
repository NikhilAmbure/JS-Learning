// another method for importing a module 

// 1 =>
import * as cartModule from '../data/cart.js';
cartModule.cart;
cartModule.addtocart('id');

// 2 =>
import {cart as mycart} from '../file.js';