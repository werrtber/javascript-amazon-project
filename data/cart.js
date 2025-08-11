export let cart = [
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  },
  
  {
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  },
  
];

export function addToCard(productId, quantity){
    let matchigItem;
    cart.forEach((cartItem) => {
      if(productId === cartItem.productId){
        matchigItem = cartItem;
      }
    });
    
    if(matchigItem){
      matchigItem.quantity += quantity;
    } else{
      cart.push({
      productId,
      quantity
    });
    }
}

export function removeFromCart(productId){
   const newCart = [];

   cart.forEach((cartItem) => {
    if(cartItem.productId !== productId){
      newCart.push(cartItem)
    }
   });

   cart = newCart;
}

