var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var item = {itemName : item};
 var price = Math.floor(Math.random() * 100) + 1;
 item.itemPrice = price;

 cart.push(item);
 return;
}

function viewCart() {
  // write your code here
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
  var cartStr = 'In your cart, you have ';

  for (var i = 0; i < cart.length; i++) {
    var cartEle = cart[i];
    if (i === 0 && cart.length === 1) {
      cartStr += `${cartEle.itemName} at $${cartEle.itemPrice}.`
    } else if (i !== cart.length - 1){
      cartStr += `${cartEle.itemName} at $${cartEle.itemPrice}, `
    } else {
      cartStr += `and ${cartEle.itemName} at $${cartEle.itemPrice}.`
    }
    }
  return cartStr; 
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
