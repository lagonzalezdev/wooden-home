import { Component } from '@angular/core';

@Component({
  selector: 'shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent {

}
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');


if(document.readyState == 'loading'){
  document.addEventListener("DOMContentLoaded", ready);
} else{
  ready();
}

function ready(){
  var removeCartButtons = document.getElementsByClassName('cart-remove')
  console.log(removeCartButtons)
  for (var i = 0; i < removeCartButtons.length; i++){
    var button = removeCartButtons [i]

  }
}


